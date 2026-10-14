import { Question } from "@/types/quiz";
import { QUESTIONS } from "@/data/questions";
import { INDUCTIVE_QUESTIONS } from "@/data/inductiveQuestions";
import { DEDUCTIVE_QUESTIONS } from "@/data/deductiveQuestions";
import { NUMERICAL_QUESTIONS } from "@/data/numericalQuestions";
import { type TestModel } from "@/app/lib/testModels";

export const QUESTION_BANKS: Partial<Record<TestModel, Question[]>> = {
  abstract: QUESTIONS,
  inductive: INDUCTIVE_QUESTIONS,
  deductive: DEDUCTIVE_QUESTIONS,
  numerical: NUMERICAL_QUESTIONS,
};