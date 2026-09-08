"use client";

import { useState, useEffect } from "react";
import { AnswerMap, ScreenState, ResultFilter, Question } from "@/types/quiz";
import { QUESTIONS } from "@/data/questions";
import {
  calculateScore,
  formatTime,
  getQuestionStatus,
  createShuffledQuiz,
  DEFAULT_DURATION_SECONDS,
  TEST_QUESTION_COUNT,
  CHOICE_LABELS,
} from "@/lib/quiz";

export default function Home() {
  const [screen, setScreen] = useState<ScreenState>("intro");
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(() =>
    createShuffledQuiz(QUESTIONS, TEST_QUESTION_COUNT)
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_DURATION_SECONDS);
  const [filter, setFilter] = useState<ResultFilter>("all");

  useEffect(() => {
    if (screen !== "test") return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          setScreen("results");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [screen]);

  const handleStart = () => {
    setActiveQuestions(createShuffledQuiz(QUESTIONS, TEST_QUESTION_COUNT));
    setAnswers({});
    setVisited(new Set([0]));
    setCurrentIdx(0);
    setSecondsLeft(DEFAULT_DURATION_SECONDS);
    setScreen("test");
  };

  const handleBackToMain = () => {
    setAnswers({});
    setVisited(new Set([0]));
    setCurrentIdx(0);
    setSecondsLeft(DEFAULT_DURATION_SECONDS);
    setScreen("intro");
  };

  const handleSelect = (choiceIdx: number) => {
    setAnswers((prev) => ({ ...prev, [currentIdx]: choiceIdx }));
  };

  const jumpTo = (idx: number) => {
    setVisited((prev) => new Set(prev).add(idx));
    setCurrentIdx(idx);
  };

  const handleSkip = () => {
    const nextIdx = (currentIdx + 1) % activeQuestions.length;
    jumpTo(nextIdx);
  };

  const currentQ = activeQuestions[currentIdx] || activeQuestions[0];
  const { score, percentage, passed } = calculateScore(answers, activeQuestions);

  const answeredCount = Object.keys(answers).length;
  const skippedCount = Array.from(visited).filter(
    (idx) => answers[idx] === undefined && idx !== currentIdx
  ).length;
  const remainingCount = activeQuestions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans transition-colors">
      <div className="w-full max-w-6xl">
        {screen === "intro" && (
          <div className="max-w-2xl mx-auto bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-sm text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-900/40 mb-4">
              Employment Assessment Simulator
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-slate-950 dark:text-white">
              Abstract Reasoning Test
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Presents 25 randomized questions selected from an active 100-question pool. Question ordering and answer choice positions are reshuffled on every session.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8 max-w-md mx-auto text-left">
              <div className="bg-slate-50 dark:bg-[#161f33] border border-slate-200/60 dark:border-slate-800/80 p-3.5 rounded-2xl">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Questions</div>
                <div className="text-xl sm:text-2xl font-bold mt-0.5 text-slate-900 dark:text-slate-100">25</div>
              </div>
              <div className="bg-slate-50 dark:bg-[#161f33] border border-slate-200/60 dark:border-slate-800/80 p-3.5 rounded-2xl">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Time Limit</div>
                <div className="text-xl sm:text-2xl font-bold mt-0.5 text-slate-900 dark:text-slate-100">10 min</div>
              </div>
              <div className="bg-slate-50 dark:bg-[#161f33] border border-slate-200/60 dark:border-slate-800/80 p-3.5 rounded-2xl">
                <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Cutoff</div>
                <div className="text-xl sm:text-2xl font-bold mt-0.5 text-slate-900 dark:text-slate-100">75%</div>
              </div>
            </div>

            <div className="bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 rounded-2xl p-4 mb-8 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 text-left max-w-md mx-auto leading-relaxed">
              Use the side question palette during the exam to quickly return to skipped or unvisited questions before the countdown expires.
            </div>

            <button
              onClick={handleStart}
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-2xl shadow-sm hover:shadow transition cursor-pointer"
            >
              Start Practice Test
            </button>
          </div>
        )}

        {screen === "test" && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] items-start gap-6">
            <div className="w-full bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800/80 rounded-3xl p-5 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Question</span>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                      {currentIdx + 1} <span className="text-slate-400 text-sm font-normal">/ {activeQuestions.length}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleBackToMain}
                    className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition cursor-pointer"
                  >
                    ← Exit
                  </button>
                </div>

                <div className={`font-mono font-bold text-sm px-3.5 py-1.5 rounded-xl border flex items-center gap-1.5 ${
                  secondsLeft <= 90
                    ? "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/50 animate-pulse"
                    : "bg-slate-100 text-slate-800 border-slate-200/80 dark:bg-slate-800/60 dark:text-slate-200 dark:border-slate-700/60"
                }`}>
                  <span>⏱</span>
                  <span>{formatTime(secondsLeft)}</span>
                </div>
              </div>

              <h2 className="text-base sm:text-lg font-semibold mb-5 text-slate-900 dark:text-slate-100">{currentQ.prompt}</h2>

              {currentQ.type === "matrix" ? (
                <div className="mb-6 p-4 sm:p-5 bg-slate-50 dark:bg-[#161f33]/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-center">
                  <div className="grid grid-cols-3 gap-2 sm:gap-2.5 max-w-xs sm:max-w-sm w-full">
                    {currentQ.sequence.map((item, idx) => (
                      <div key={idx} className="aspect-square bg-white dark:bg-[#0e1422] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-2xs">
                        {item}
                      </div>
                    ))}
                    <div className="aspect-square bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border-2 border-dashed border-indigo-400 dark:border-indigo-500 flex items-center justify-center font-bold text-2xl text-indigo-600 dark:text-indigo-400">
                      ?
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6 p-4 sm:p-5 bg-slate-50 dark:bg-[#161f33]/60 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto flex justify-center">
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    {currentQ.sequence.map((item, idx) => (
                      <div key={idx} className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-[#0e1422] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-2xs shrink-0">
                        {item}
                      </div>
                    ))}
                    <span className="text-slate-400 font-bold px-1 text-base select-none">→</span>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border-2 border-dashed border-indigo-400 dark:border-indigo-500 flex items-center justify-center font-bold text-2xl text-indigo-600 dark:text-indigo-400 shrink-0">
                      ?
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-3">
                  Select Answer Choice
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentQ.options.map((opt, optIdx) => {
                    const isSelected = answers[currentIdx] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelect(optIdx)}
                        className={`relative aspect-square sm:aspect-auto sm:h-28 flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSelected
                            ? "border-indigo-600 bg-indigo-50/60 dark:border-indigo-500 dark:bg-indigo-950/40 shadow-xs"
                            : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#161f33]/40 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        <span className={`absolute top-2 left-2 text-xs font-bold ${isSelected ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500"}`}>
                          {CHOICE_LABELS[optIdx]}
                        </span>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mt-1">
                          {opt}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800/80 pt-5 gap-2">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => jumpTo(currentIdx - 1)}
                  className="px-4 py-2.5 border border-slate-200 dark:border-slate-700/80 rounded-xl disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 transition"
                >
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSkip}
                    className="px-4 py-2.5 border border-amber-300/80 dark:border-amber-700/60 bg-amber-50/60 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 rounded-xl text-xs sm:text-sm font-semibold hover:bg-amber-100/60 dark:hover:bg-amber-950/50 transition cursor-pointer"
                  >
                    Skip
                  </button>

                  {currentIdx < activeQuestions.length - 1 ? (
                    <button
                      onClick={() => jumpTo(currentIdx + 1)}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer shadow-xs"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={() => setScreen("results")}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer shadow-xs"
                    >
                      Submit Test
                    </button>
                  )}
                </div>
              </div>
            </div>

            <aside className="w-full bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800/80 rounded-3xl p-5 shadow-xs lg:sticky lg:top-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">Question Palette</h3>
                <span className="text-xs text-slate-400 font-medium">25 Items</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 p-2 rounded-xl">
                  <div className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400">Answered</div>
                  <div className="text-lg font-extrabold text-emerald-800 dark:text-emerald-300">{answeredCount}</div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 p-2 rounded-xl">
                  <div className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">Skipped</div>
                  <div className="text-lg font-extrabold text-amber-800 dark:text-amber-300">{skippedCount}</div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 p-2 rounded-xl">
                  <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">Left</div>
                  <div className="text-lg font-extrabold text-slate-800 dark:text-slate-200">{remainingCount}</div>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-4">
                {activeQuestions.map((_, i) => {
                  const status = getQuestionStatus(i, currentIdx, answers, visited);
                  let style = "bg-slate-50 dark:bg-[#161f33]/60 text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-slate-300";

                  if (status === "current") {
                    style = "border-2 border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-bold ring-2 ring-indigo-400/20";
                  } else if (status === "answered") {
                    style = "bg-emerald-600 text-white border border-emerald-600 font-semibold";
                  } else if (status === "skipped") {
                    style = "border-2 border-amber-500 bg-amber-50/80 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 font-semibold";
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => jumpTo(i)}
                      className={`aspect-square h-9 sm:h-10 w-full rounded-xl text-xs flex items-center justify-center transition cursor-pointer ${style}`}
                      title={`Question ${i + 1} (${status})`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-slate-200 dark:border-slate-800/80 pt-3 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-600 shrink-0" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded border-2 border-amber-500 bg-amber-100 dark:bg-amber-950 shrink-0" />
                  <span>Skipped (viewed, no answer)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded border-2 border-indigo-600 bg-indigo-100 dark:bg-indigo-950 shrink-0" />
                  <span>Current Question</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700 shrink-0" />
                  <span>Unvisited</span>
                </div>
              </div>
            </aside>
          </div>
        )}

        {screen === "results" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-xs text-center">
              <span
                className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold mb-3 ${
                  passed
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                    : "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                }`}
              >
                {passed ? "Assessment Passed" : "Did Not Meet Cutoff"}
              </span>

              <h1 className="text-4xl font-black text-slate-950 dark:text-white mb-1">
                {score} / {activeQuestions.length}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                {percentage}% correct score (Pass requirement: 75%)
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleStart}
                  className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-semibold transition cursor-pointer text-sm shadow-xs"
                >
                  Retake Test (New Shuffled 25)
                </button>
                <button
                  onClick={handleBackToMain}
                  className="px-7 py-3 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold transition cursor-pointer text-sm"
                >
                  Back to Main Page
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">Answer Breakdown</h2>
              <div className="flex gap-1 bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
                {(["all", "wrong", "correct"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-lg capitalize transition cursor-pointer ${
                      filter === f
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs font-bold"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {activeQuestions.map((q, idx) => {
                const userAns = answers[idx];
                const isCorrect = userAns === q.correct;

                if (filter === "wrong" && isCorrect) return null;
                if (filter === "correct" && !isCorrect) return null;

                return (
                  <div
                    key={`${q.id}-${idx}`}
                    className={`bg-white dark:bg-[#111726] border rounded-3xl p-5 sm:p-7 shadow-xs ${
                      isCorrect
                        ? "border-emerald-200/90 dark:border-emerald-900/50"
                        : "border-rose-200/90 dark:border-rose-900/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Question {idx + 1}</span>
                        <h3 className="font-semibold text-base sm:text-lg mt-0.5 text-slate-900 dark:text-slate-100">{q.prompt}</h3>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold shrink-0 ${
                          isCorrect
                            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80"
                            : "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800/80"
                        }`}
                      >
                        {isCorrect ? "Correct" : userAns === undefined ? "Skipped" : "Incorrect"}
                      </span>
                    </div>

                    <div className="my-4 p-3.5 bg-slate-50 dark:bg-[#161f33]/50 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-x-auto">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Pattern:</div>
                      {q.type === "matrix" ? (
                        <div className="grid grid-cols-3 gap-2 max-w-xs">
                          {q.sequence.map((item, sIdx) => (
                            <div key={sIdx} className="w-14 h-14 bg-white dark:bg-[#0e1422] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                              {item}
                            </div>
                          ))}
                          <div className="w-14 h-14 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-dashed border-indigo-400 flex items-center justify-center font-bold text-indigo-500 text-lg">
                            ?
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          {q.sequence.map((item, sIdx) => (
                            <div key={sIdx} className="w-14 h-14 bg-white dark:bg-[#0e1422] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                              {item}
                            </div>
                          ))}
                          <span className="text-slate-400 font-bold px-1 text-sm select-none">→</span>
                          <div className="w-14 h-14 bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border border-dashed border-indigo-400 flex items-center justify-center font-bold text-indigo-500 text-lg shrink-0">
                            ?
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                      <div className={`p-3 rounded-2xl border flex items-center gap-3 ${
                        isCorrect
                          ? "bg-emerald-50/40 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900/60"
                          : "bg-rose-50/40 border-rose-200 dark:bg-rose-950/20 dark:border-rose-900/60"
                      }`}>
                        <div className="w-12 h-12 bg-white dark:bg-[#0e1422] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                          {userAns !== undefined ? q.options[userAns] : <span className="text-xs text-slate-400">None</span>}
                        </div>
                        <div>
                          <div className="text-xs text-slate-500">Your Answer</div>
                          <div className="font-bold text-sm">
                            {userAns !== undefined ? `Option ${CHOICE_LABELS[userAns]}` : "Skipped"}
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 flex items-center gap-3">
                        <div className="w-12 h-12 bg-white dark:bg-[#0e1422] rounded-xl border border-emerald-300 dark:border-emerald-800 flex items-center justify-center shrink-0">
                          {q.options[q.correct]}
                        </div>
                        <div>
                          <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Correct Answer</div>
                          <div className="font-bold text-sm text-emerald-950 dark:text-emerald-200">
                            Option {CHOICE_LABELS[q.correct]}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 p-3.5 bg-slate-50 dark:bg-[#161f33]/60 rounded-2xl text-xs sm:text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-white">Rule: </span>
                      {q.rule}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
