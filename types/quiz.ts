import { ReactNode } from "react";

export type QuestionType = "sequence" | "matrix";

export type Question = {
  id: number;
  prompt: string;
  type: QuestionType;
  sequence: ReactNode[];
  options: ReactNode[];
  correct: number;
  rule: string;
};

export type AnswerMap = Record<number, number>;

export type TestScore = {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
};

export type ScreenState = "intro" | "test" | "results";
export type ResultFilter = "all" | "wrong" | "correct";
export type QuestionNavStatus = "current" | "answered" | "skipped" | "unvisited";
