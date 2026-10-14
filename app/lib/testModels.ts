export const TEST_MODELS = [
  { id: "abstract", label: "Abstract Reasoning" },
  { id: "inductive", label: "Inductive Reasoning" },
  { id: "deductive", label: "Deductive Reasoning" },
  { id: "numerical", label: "Numerical Reasoning" },
] as const;

export type TestModel = (typeof TEST_MODELS)[number]["id"];

export const MODEL_DURATION_SECONDS: Record<TestModel, number> = {
  abstract: 900,
  inductive: 900,
  deductive: 1200,
  numerical: 1200,
};

export const MODEL_INFO: Record<TestModel, string> = {
  abstract:
    "Presents 25 randomized questions selected from an active 100-question pool. Question ordering and answer choice positions are reshuffled on every session.",
  inductive:
    "Presents testing pattern discovery, matrix logic, and sequence rules. Question ordering and answer choice positions are reshuffled on every session.",
  deductive:
    "Presents testing syllogisms, arrangement constraints, and conditional logic. Question ordering and answer choice positions are reshuffled on every session.",
  numerical:
    "Presents testing percentages, ratios, rates, and data interpretation. Question ordering and answer choice positions are reshuffled on every session.",
};