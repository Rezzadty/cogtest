"use client";

import { Question } from "@/types/quiz";
import { CHOICE_LABELS } from "@/lib/quiz";

const TILE = "bg-white dark:bg-[#0e1422] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-2xs shrink-0";

export function SequenceView({ q, compact = false }: { q: Question; compact?: boolean }) {
  const cell = compact ? "w-14 h-14" : "w-16 h-16 sm:w-20 sm:h-20";
  const mark = `${cell} bg-indigo-50/70 dark:bg-indigo-950/30 rounded-xl border-2 border-dashed border-indigo-400 dark:border-indigo-500 flex items-center justify-center font-bold shrink-0 ${
    compact ? "text-lg text-indigo-500" : "text-2xl text-indigo-600 dark:text-indigo-400"
  }`;

  if (q.type === "deductive") {
    return (
      <div className={compact ? "space-y-1.5 text-xs text-slate-800 dark:text-slate-200" : "space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium"}>
        {q.sequence.map((rule, i) => (
          <div key={i} className="flex items-start gap-2.5">
            {compact ? (
              <span className="text-indigo-500 font-bold shrink-0">{i + 1}.</span>
            ) : (
              <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
            )}
            <span>{rule}</span>
          </div>
        ))}
      </div>
    );
  }

  if (q.type === "matrix") {
    return (
      <div className={`grid grid-cols-3 gap-2 ${compact ? "max-w-xs" : "sm:gap-2.5 max-w-xs sm:max-w-sm"} w-full`}>
        {q.sequence.map((item, i) => (
          <div key={i} className={compact ? `${TILE} ${cell}` : `aspect-square ${TILE}`}>{item}</div>
        ))}
        <div className={mark}>?</div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${compact ? "gap-2" : "gap-2 sm:gap-3"}`}>
      {q.sequence.map((item, i) => (
        <div key={i} className={`${TILE} ${cell}`}>{item}</div>
      ))}
      <span className="text-slate-400 font-bold px-1 select-none">→</span>
      <div className={mark}>?</div>
    </div>
  );
}