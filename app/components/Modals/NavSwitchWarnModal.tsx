"use client";

import { Modal } from "@/app/components/Modal";
import { BTN_GHOST, BTN_SOLID } from "@/app/lib/styles";

interface NavSwitchWarnModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  screen: "test" | "results";
}

export function NavSwitchWarnModal({ isOpen, onClose, onConfirm, screen }: NavSwitchWarnModalProps) {
  if (!isOpen) return null;

  const isResults = screen === "results";

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6">
        {isResults ? "Switch Test Model?" : "Switch Test Model?"}
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        {isResults 
          ? "You have completed your test. Switching models will return you to the home page." 
          : "You are currently in the middle of a test. Switching models will discard your current progress."}
      </p>
      <div className="flex gap-3">
        <button onClick={onClose} className={BTN_GHOST}>
          {isResults ? "Stay here" : "Continue Test"}
        </button>
        <button onClick={onConfirm} className={`${BTN_SOLID} ${isResults ? "bg-indigo-600 hover:bg-indigo-500" : "bg-amber-500 hover:bg-amber-400"}`}>
          Switch Model
        </button>
      </div>
    </Modal>
  );
}