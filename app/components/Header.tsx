"use client";

import { TEST_MODELS, type TestModel } from "@/app/lib/testModels";
import { handleNavModelClick } from "@/app/lib/navigation";

interface HeaderProps {
  selectedModel: TestModel;
  screen: "intro" | "test" | "results";
  onModelClick: (modelId: TestModel) => void;
  onMenuToggle: () => void;
  mobileMenuOpen: boolean;
}

export function Header({ selectedModel, screen, onModelClick, onMenuToggle, mobileMenuOpen }: HeaderProps) {
  return (
    <header className="w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-[#0c1220]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">CogTest</span>
          <span className="hidden sm:inline-flex text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-900/40">
            Simulator
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {TEST_MODELS.map((model) => (
            <button
              key={model.id}
              type="button"
              onClick={() => onModelClick(model.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ease-out cursor-pointer whitespace-nowrap border active:scale-95 ${
                selectedModel === model.id
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-transparent dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/60"
              }`}
            >
              {model.label}
            </button>
          ))}
        </nav>
        <div className="relative md:hidden">
          <button
            type="button"
            onClick={onMenuToggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#161f33] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 cursor-pointer shadow-2xs transition-all duration-200 hover:bg-slate-200/70 dark:hover:bg-[#1c2740]"
          >
            <span className="truncate max-w-150px xs:max-w-[200px]">
              {TEST_MODELS.find((m) => m.id === selectedModel)?.label}
            </span>
            <svg
              className={`w-3.5 h-3.5 shrink-0 text-slate-500 transition-transform duration-300 ${mobileMenuOpen ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className={`fixed inset-0 z-40 transition-opacity duration-200 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={onMenuToggle}
          />

          <div
            className={`absolute right-0 mt-2 w-56 bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-1.5 z-50 flex flex-col gap-1 origin-top-right transition-all duration-200 ease-out ${
              mobileMenuOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
            }`}
          >
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800/80 mb-0.5">
              Select Test Model
            </div>
            {TEST_MODELS.map((model) => (
              <button
                key={model.id}
                type="button"
                onClick={() => {
                  onMenuToggle();
                  onModelClick(model.id);
                }}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-medium text-left transition-all duration-200 cursor-pointer ${
                  selectedModel === model.id
                    ? "bg-indigo-600 text-white font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70"
                }`}
              >
                <span>{model.label}</span>
                {selectedModel === model.id && (
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="2,8 6,12 14,4" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}