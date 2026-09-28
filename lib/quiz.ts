import { AnswerMap, Question, QuestionNavStatus, TestScore } from "@/types/quiz";
export const PASSING_PERCENTAGE = 75;
export const DEFAULT_DURATION_SECONDS = 600;
export const TEST_QUESTION_COUNT = 25;
export const CHOICE_LABELS = ["A", "B", "C", "D"] as const;
export function getQuestionStatus(
  index: number,
  currentIdx: number,
  answers: AnswerMap,
  visited: Set<number>
): QuestionNavStatus {
  if (index === currentIdx) return "current";
  if (answers[index] !== undefined) return "answered";
  if (visited.has(index)) return "skipped";
  return "unvisited";
}

export function calculateScore(
  answers: AnswerMap,
  questions: { correct: number }[],
  threshold = PASSING_PERCENTAGE
): TestScore {
  const total = questions.length;
  if (total === 0) return { score: 0, total: 0, percentage: 0, passed: false };
  const score = questions.reduce((acc, q, idx) => acc + (answers[idx] === q.correct ? 1 : 0), 0);
  const percentage = Math.round((score / total) * 100);
  return {
    score,
    total,
    percentage,
    passed: percentage >= threshold,
  };
}

export function formatTime(totalSeconds: number): string {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export function shuffleArray<T>(items: readonly T[] | T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function shuffleQuestion(q: Question): Question {
  const indexed = q.options.map((opt, idx) => ({ opt, isCorrect: idx === q.correct }));
  const shuffledOptionsWithMeta = shuffleArray(indexed);
  const newCorrect = shuffledOptionsWithMeta.findIndex((item) => item.isCorrect);
  return {
    ...q,
    options: shuffledOptionsWithMeta.map((item) => item.opt),
    correct: newCorrect >= 0 ? newCorrect : 0,
  };
}

export function createShuffledQuiz(questions: Question[], count = TEST_QUESTION_COUNT): Question[] {
  return shuffleArray(questions).slice(0, count).map(shuffleQuestion);
}
