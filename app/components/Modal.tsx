"use client";

import { type ReactNode } from "react";

export function Modal({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-[screenIn_0.2s_ease-out]" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-[#111726] border border-slate-200 dark:border-slate-800/80 rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-sm text-center animate-[menuIn_0.2s_ease-out]">
          {children}
        </div>
      </div>
    </>
  );
}