"use client";

import { Modal } from "@/app/components/Modal";
import { BTN_GHOST, BTN_SOLID } from "@/app/lib/styles";

interface ExitConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExit: () => void;
}

export function ExitConfirmModal({ isOpen, onClose, onExit }: ExitConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">Exit Test?</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        Your progress will be lost and you will return to the main page. This action cannot be undone.
      </p>
      <div className="flex gap-3">
        <button onClick={onClose} className={BTN_GHOST}>Continue Test</button>
        <button onClick={() => { onClose(); onExit(); }} className={`${BTN_SOLID} bg-rose-600 hover:bg-rose-500`}>Exit</button>
      </div>
    </Modal>
  );
}