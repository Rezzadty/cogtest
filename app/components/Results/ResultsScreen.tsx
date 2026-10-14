"use client";

import { Question } from "@/types/quiz";
import { CHOICE_LABELS } from "@/lib/quiz";
import { SequenceView } from "@/app/components/SequenceView";
import { AnswerComparison } from "@/app/components/AnswerComparison";
import { CARD, BADGE_PASSED, BADGE_FAILED } from "@/app/lib/styles";

type ResultFilter = "all" | "wrong" | "correct";

interface ResultsScreenProps {
  activeQuestions: Question[];
  answers: Record<number, number>;
  score: number;
  percentage: number;
  passed: boolean;
  filter: ResultFilter;
  onFilterChange: (filter: ResultFilter) => void;
  onRetake: () => void;
  onBackToMain: () => void;
}

export function ResultsScreen({
  activeQuestions,
  answers,
  score,
  percentage,
  passed,
  filter,
  onFilterChange,
  onRetake,
  onBackToMain,
}: ResultsScreenProps) {
  return (
    <div className="space-y-6">
      <div className={`${CARD} p-6 sm:p-10 shadow-xs text-center`}>
        <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold mb-3 ${passed ? BADGE_PASSED : BADGE_FAILED}`}>
          {passed ? "Assessment Passed" : "Did Not Meet Cutoff"}
        </span>
        <h1 className="text-4xl font-black text-slate-950 dark:text-white mb-1">
          {score} / {activeQuestions.length}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
          {percentage}% correct score (Pass requirement: 75%)
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button onClick={onRetake} className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-semibold transition cursor-pointer text-sm shadow-xs">
            Retake Test (New Shuffled 25)
          </button>
          <button onClick={onBackToMain} className="px-7 py-3 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold transition cursor-pointer text-sm">
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
              onClick={() => onFilterChange(f)}
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
                isCorrect ? "border-emerald-200/90 dark:border-emerald-900/50" : "border-rose-200/90 dark:border-rose-900/50"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Question {idx + 1}</span>
                  <h3 className="font-semibold text-base sm:text-lg mt-0.5 text-slate-900 dark:text-slate-100">{q.prompt}</h3>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-bold shrink-0 ${isCorrect ? BADGE_PASSED : BADGE_FAILED}`}>
                  {isCorrect ? "Correct" : userAns === undefined ? "Skipped" : "Incorrect"}
                </span>
              </div>
              <div className="my-4 p-3.5 bg-slate-50 dark:bg-[#161f33]/50 rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-x-auto">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {q.type === "deductive" ? "Premises:" : "Pattern:"}
                </div>
                <SequenceView q={q} compact />
              </div>
              <AnswerComparison q={q} userAns={userAns} isCorrect={isCorrect} />
              <div className="mt-3 p-3.5 bg-slate-50 dark:bg-[#161f33]/60 rounded-2xl text-xs sm:text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">Rule: </span>
                {q.rule}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}