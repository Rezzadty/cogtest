"use client";

import { Modal } from "@/app/components/Modal";
import { BTN_GHOST, BTN_SOLID } from "@/app/lib/styles";

interface NavSwitchWarnModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function NavSwitchWarnModal({ isOpen, onClose, onConfirm }: NavSwitchWarnModalProps) {
  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mb-6">Switch Test Model?</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        You are currently in the middle of a test. Switching models will discard your current progress.
      </p>
      <div className="flex gap-3">
        <button onClick={onClose} className={BTN_GHOST}>Continue Test</button>
        <button onClick={onConfirm} className={`${BTN_SOLID} bg-amber-500 hover:bg-amber-400`}>Switch Model</button>
      </div>
    </Modal>
  );
}