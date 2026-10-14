export const CARD = "bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800/80 rounded-3xl";
export const TILE = "bg-white dark:bg-[#0e1422] rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-2xs shrink-0";
export const BTN_GHOST = "flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition cursor-pointer";
export const BTN_SOLID = "flex-1 px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition cursor-pointer shadow-xs";
export const BADGE_PASSED = "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800";
export const BADGE_FAILED = "bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800";

export const YOUR_ANSWER_BG = (isCorrect: boolean) =>
  isCorrect
    ? "bg-emerald-50/40 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900/60"
    : "bg-rose-50/40 border-rose-200 dark:bg-rose-950/20 dark:border-rose-900/60";