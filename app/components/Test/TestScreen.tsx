"use client";

import { useState } from "react";
import { Question } from "@/types/quiz";
import { formatTime, CHOICE_LABELS } from "@/lib/quiz";
import { SequenceView } from "@/app/components/SequenceView";
import { CARD, TILE } from "@/app/lib/styles";
import { QuestionPalette } from "./QuestionPalette";

interface TestScreenProps {
  activeQuestions: Question[];
  currentIdx: number;
  secondsLeft: number;
  answers: Record<number, number>;
  visited: Set<number>;
  navDirection: "forward" | "backward";
  onSelect: (choiceIdx: number) => void;
  onJumpTo: (idx: number, direction?: "forward" | "backward") => void;
  onSkip: () => void;
  onExit: () => void;
  onSubmit: () => void;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
}

export function TestScreen({
  activeQuestions,
  currentIdx,
  secondsLeft,
  answers,
  visited,
  navDirection,
  onSelect,
  onJumpTo,
  onSkip,
  onExit,
  onSubmit,
  onPrevious,
  onNext,
  canGoPrevious,
  isLastQuestion,
}: TestScreenProps) {
  const currentQ = activeQuestions[currentIdx] || activeQuestions[0];
  const isSelected = (optIdx: number) => answers[currentIdx] === optIdx;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] items-start gap-6">
      <div className={`w-full ${CARD} p-5 sm:p-8 shadow-xs`}>
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-4 mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Question</span>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              {currentIdx + 1} <span className="text-slate-400 text-sm font-normal">/ {activeQuestions.length}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`font-mono font-bold text-sm px-3.5 py-1.5 rounded-xl border flex items-center gap-1.5 ${
              secondsLeft <= 90
                ? "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/50 animate-pulse"
                : "bg-slate-100 text-slate-800 border-slate-200/80 dark:bg-slate-800/60 dark:text-slate-200 dark:border-slate-700/60"
            }`}>
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="9" r="5.5" />
                <polyline points="8,6 8,9 10,9" />
                <line x1="6" y1="1.5" x2="10" y2="1.5" strokeWidth="2" />
              </svg>
              <span>{formatTime(secondsLeft)}</span>
            </div>
            <button
              onClick={onExit}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/50 transition cursor-pointer"
            >
              Exit
            </button>
          </div>
        </div>
        <div
          key={currentIdx}
          style={{
            animation: `${navDirection === "forward" ? "slideInRight" : "slideInLeft"} 0.3s ease-out`,
          }}
        >
          <h2 className="text-base sm:text-lg font-semibold mb-5 text-slate-900 dark:text-slate-100">
            {currentQ.prompt}
          </h2>
          {currentQ.type === "deductive" ? (
            <div className="mb-6 p-4 sm:p-5 bg-slate-50 dark:bg-[#161f33]/60 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2.5 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="1" width="12" height="14" rx="1.5" />
                  <line x1="5" y1="5" x2="11" y2="5" />
                  <line x1="5" y1="8" x2="11" y2="8" />
                  <line x1="5" y1="11" x2="9" y2="11" />
                </svg>
                <span>Premises & Constraints</span>
              </div>
              <SequenceView q={currentQ} />
            </div>
          ) : (
            <div className={`mb-6 p-4 sm:p-5 bg-slate-50 dark:bg-[#161f33]/60 rounded-2xl border border-slate-200 dark:border-slate-800 ${currentQ.type === "matrix" ? "flex justify-center" : "overflow-x-auto flex justify-center"}`}>
              <SequenceView q={currentQ} />
            </div>
          )}
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-3">
              Select Answer Choice
            </div>
            <div className={currentQ.type === "deductive" ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "grid grid-cols-2 sm:grid-cols-4 gap-3"}>
              {currentQ.options.map((opt, optIdx) => {
                const selected = isSelected(optIdx);
                return (
                  <button
                    key={optIdx}
                    onClick={() => onSelect(optIdx)}
                    className={`relative flex items-center p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                      currentQ.type === "deductive" ? "min-h-64px" : "aspect-square sm:aspect-auto sm:h-28 flex-col justify-center"
                    } ${
                      selected
                        ? "border-indigo-600 bg-indigo-50/60 dark:border-indigo-500 dark:bg-indigo-950/40 shadow-[0_0_15px_rgba(79,70,229,0.4)] dark:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#161f33]/40 hover:border-slate-300 dark:hover:border-slate-700"

                    }`}
                  >
                    <span
                      className={`${
                        currentQ.type === "deductive"
                          ? "shrink-0 mr-3 w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
                          : "absolute top-2 left-2 text-xs font-bold"
                      } ${selected ? "bg-indigo-600 text-white" : "bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}
                    >
                      {CHOICE_LABELS[optIdx]}
                    </span>
                    <div className={currentQ.type === "deductive" ? "flex-1 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100" : "w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mt-1"}>
                      {opt}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800/80 pt-5 gap-2">
          <button
            disabled={!canGoPrevious}
            onClick={onPrevious}
            className="px-4 py-2.5 border border-slate-200 dark:border-slate-700/80 rounded-xl disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 transition"
          >
            Previous
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={onSkip}
              className="px-4 py-2.5 border border-amber-300/80 dark:border-amber-700/60 bg-amber-50/60 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 rounded-xl text-xs sm:text-sm font-semibold hover:bg-amber-100/60 dark:hover:bg-amber-950/50 transition cursor-pointer"
            >
              Skip
            </button>
            {isLastQuestion ? (
              <button
                onClick={onSubmit}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer shadow-xs"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={onNext}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer shadow-xs"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <QuestionPalette
        activeQuestions={activeQuestions}
        currentIdx={currentIdx}
        answers={answers}
        visited={visited}
        onJumpTo={onJumpTo}
      />
    </div>
  );
}