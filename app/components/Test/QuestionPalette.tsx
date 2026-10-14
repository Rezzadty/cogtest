"use client";

import { getQuestionStatus } from "@/lib/quiz";
import { CARD } from "@/app/lib/styles";

interface QuestionPaletteProps {
  activeQuestions: { prompt: string }[];
  currentIdx: number;
  answers: Record<number, number>;
  visited: Set<number>;
  onJumpTo: (idx: number) => void;
}

const paletteStats = [
  { label: "Answered", value: 0, cls: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200/80 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-emerald-800 dark:text-emerald-300" },
  { label: "Skipped", value: 0, cls: "bg-amber-50 dark:bg-amber-950/30 border-amber-200/80 dark:border-amber-900/50 text-amber-700 dark:text-amber-400 text-amber-800 dark:text-amber-300" },
  { label: "Left", value: 0, cls: "bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 text-slate-800 dark:text-slate-200" },
];

const legend = [
  { label: "Answered", dot: "bg-emerald-600" },
  { label: "Skipped (viewed, no answer)", dot: "border-2 border-amber-500 bg-amber-100 dark:bg-amber-950" },
  { label: "Current Question", dot: "border-2 border-indigo-600 bg-indigo-100 dark:bg-indigo-950" },
  { label: "Unvisited", dot: "bg-slate-200 dark:bg-slate-700" },
];

export function QuestionPalette({ activeQuestions, currentIdx, answers, visited, onJumpTo }: QuestionPaletteProps) {
  const answeredCount = Object.keys(answers).length;
  const skippedCount = Array.from(visited).filter(
    (idx) => answers[idx] === undefined && idx !== currentIdx
  ).length;
  const remainingCount = activeQuestions.length - answeredCount;

  return (
    <aside className={`w-full ${CARD} p-5 shadow-xs lg:sticky lg:top-6`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">Question Palette</h3>
        <span className="text-xs text-slate-400 font-medium">25 Items</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
        {[
          { label: "Answered", value: answeredCount, cls: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200/80 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-emerald-800 dark:text-emerald-300" },
          { label: "Skipped", value: skippedCount, cls: "bg-amber-50 dark:bg-amber-950/30 border-amber-200/80 dark:border-amber-900/50 text-amber-700 dark:text-amber-400 text-amber-800 dark:text-amber-300" },
          { label: "Left", value: remainingCount, cls: "bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-500 dark:text-slate-400 text-slate-800 dark:text-slate-200" },
        ].map((stat) => (
          <div key={stat.label} className={`border p-2 rounded-xl ${stat.cls.split(" ").slice(0, 2).join(" ")} border`}>
            <div className={`text-[10px] uppercase font-bold ${stat.cls.split(" ")[2]} ${stat.cls.split(" ")[3]}`}>{stat.label}</div>
            <div className={`text-lg font-extrabold ${stat.cls.split(" ").slice(4).join(" ")}`}>{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-4">
        {activeQuestions.map((_, i) => {
          const status = getQuestionStatus(i, currentIdx, answers, visited);
          let style = "bg-slate-50 dark:bg-[#161f33]/60 text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-slate-300";
          if (status === "current") style = "border-2 border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-bold ring-2 ring-indigo-400/20";
          else if (status === "answered") style = "bg-emerald-600 text-white border border-emerald-600 font-semibold";
          else if (status === "skipped") style = "border-2 border-amber-500 bg-amber-50/80 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 font-semibold";
          return (
            <button
              key={i}
              onClick={() => onJumpTo(i)}
              className={`aspect-square h-9 sm:h-10 w-full rounded-xl text-xs flex items-center justify-center transition cursor-pointer ${style}`}
              title={`Question ${i + 1} (${status})`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800/80 pt-3 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded shrink-0 ${item.dot}`} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}