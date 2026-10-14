"use client";

import { Modal } from "@/app/components/Modal";
import { BTN_GHOST, BTN_SOLID } from "@/app/lib/styles";

interface SubmitConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  answeredCount: number;
  totalQuestions: number;
  remainingCount: number;
}

export function SubmitConfirmModal({ isOpen, onClose, onSubmit, answeredCount, totalQuestions, remainingCount }: SubmitConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">Submit Test?</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
        You answered <span className="font-bold text-slate-700 dark:text-slate-200">{answeredCount}</span> of{" "}
        {totalQuestions} questions
        {remainingCount > 0 && (
          <> — <span className="font-bold text-amber-600 dark:text-amber-400">{remainingCount} still unanswered</span>.</>
        )}
        Once submitted, you cannot change your answers.
      </p>
      <div className="flex gap-3">
        <button onClick={onClose} className={BTN_GHOST}>Keep Working</button>
        <button onClick={() => { onClose(); onSubmit(); }} className={`${BTN_SOLID} bg-emerald-600 hover:bg-emerald-500`}>Submit</button>
      </div>
    </Modal>
  );
}