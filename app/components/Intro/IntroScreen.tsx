"use client";

import { TEST_MODELS, type TestModel, MODEL_INFO, MODEL_DURATION_SECONDS } from "@/app/lib/testModels";
import { QUESTION_BANKS } from "@/app/lib/questionBanks";
import { CARD } from "@/app/lib/styles";
import { type ScreenState } from "@/types/quiz";

interface IntroScreenProps {
  selectedModel: TestModel;
  onStart: () => void;
}

export function IntroScreen({ selectedModel, onStart }: IntroScreenProps) {
  const currentDuration = MODEL_DURATION_SECONDS[selectedModel];
  const hasQuestions = !!QUESTION_BANKS[selectedModel];

  const introStats = [
    { label: "Questions", value: "25" },
    { label: "Time Limit", value: `${Math.floor(currentDuration / 60)} min` },
    { label: "Cutoff", value: "75%" },
  ];

  return (
    <div className={`max-w-2xl mx-auto ${CARD} p-6 sm:p-10 shadow-sm text-center`}>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-900/40 mb-4">
        Employment Assessment Simulator
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-slate-950 dark:text-white">
        {TEST_MODELS.find((m) => m.id === selectedModel)?.label} Test
      </h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
        {MODEL_INFO[selectedModel]}
      </p>
      <div className="grid grid-cols-3 gap-3 mb-8 max-w-md mx-auto text-left">
        {introStats.map((stat) => (
          <div key={stat.label} className="bg-slate-50 dark:bg-[#161f33] border border-slate-200/60 dark:border-slate-800/80 p-3.5 rounded-2xl">
            <div className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</div>
            <div className="text-xl sm:text-2xl font-bold mt-0.5 text-slate-900 dark:text-slate-100">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 rounded-2xl p-4 mb-8 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 text-left max-w-md mx-auto leading-relaxed">
        Use the side question palette during the exam to quickly return to skipped or unvisited questions before the countdown expires.
      </div>
      <button
        onClick={onStart}
        disabled={!hasQuestions}
        className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-2xl shadow-sm hover:shadow transition cursor-pointer"
      >
        {hasQuestions ? "Start Practice Test" : "Coming Soon"}
      </button>
    </div>
  );
}