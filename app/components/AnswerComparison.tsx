"use client";

import { Question } from "@/types/quiz";
import { CHOICE_LABELS } from "@/lib/quiz";

const YOUR_ANSWER_BG = (isCorrect: boolean) =>
  isCorrect
    ? "bg-emerald-50/40 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900/60"
    : "bg-rose-50/40 border-rose-200 dark:bg-rose-950/20 dark:border-rose-900/60";

export function AnswerComparison({ q, userAns, isCorrect }: { q: Question; userAns?: number; isCorrect: boolean }) {
  const isDeductive = q.type === "deductive";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
      <div className={`${isDeductive ? "p-3.5 flex-col justify-center" : "p-3 flex items-center gap-3"} rounded-2xl border flex ${YOUR_ANSWER_BG(isCorrect)}`}>
        {isDeductive ? (
          <>
            <div className="text-xs text-slate-500 mb-1">Your Answer</div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              {userAns !== undefined ? `Option ${CHOICE_LABELS[userAns]}: ${q.options[userAns]}` : "Skipped"}
            </div>
          </>
        ) : (
          <>
            <div className="w-12 h-12 bg-white dark:bg-[#0e1422] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
              {userAns !== undefined ? q.options[userAns] : <span className="text-xs text-slate-400">None</span>}
            </div>
            <div>
              <div className="text-xs text-slate-500">Your Answer</div>
              <div className="font-bold text-sm">
                {userAns !== undefined ? `Option ${CHOICE_LABELS[userAns]}` : "Skipped"}
              </div>
            </div>
          </>
        )}
      </div>
      <div className={`${isDeductive ? "p-3.5 flex-col justify-center" : "p-3 flex items-center gap-3"} rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 flex`}>
        {isDeductive ? (
          <>
            <div className="text-xs text-emerald-700 dark:text-emerald-400 mb-1">Correct Answer</div>
            <div className="font-bold text-sm text-emerald-950 dark:text-emerald-200">
              Option {CHOICE_LABELS[q.correct]}: {q.options[q.correct]}
            </div>
          </>
        ) : (
          <>
            <div className="w-12 h-12 bg-white dark:bg-[#0e1422] rounded-xl border border-emerald-300 dark:border-emerald-800 flex items-center justify-center shrink-0">
              {q.options[q.correct]}
            </div>
            <div>
              <div className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Correct Answer</div>
              <div className="font-bold text-sm text-emerald-950 dark:text-emerald-200">
                Option {CHOICE_LABELS[q.correct]}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}