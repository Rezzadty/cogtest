import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

function calculateScore(answers, questions, threshold = 75) {
  const total = questions.length;
  if (total === 0) return { score: 0, total: 0, percentage: 0, passed: false };
  const score = questions.reduce((acc, q, idx) => acc + (answers[idx] === q.correct ? 1 : 0), 0);
  const percentage = Math.round((score / total) * 100);
  return { score, total, percentage, passed: percentage >= threshold };
}

function formatTime(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleQuestion(q) {
  const indexed = q.options.map((opt, idx) => ({ opt, isCorrect: idx === q.correct }));
  const shuffled = shuffleArray(indexed);
  const newCorrect = shuffled.findIndex((item) => item.isCorrect);
  return {
    ...q,
    options: shuffled.map((item) => item.opt),
    correct: newCorrect >= 0 ? newCorrect : 0,
  };
}

function getQuestionStatus(index, currentIdx, answers, visited) {
  if (index === currentIdx) return "current";
  if (answers[index] !== undefined) return "answered";
  if (visited.has(index)) return "skipped";
  return "unvisited";
}

test("calculateScore computes totals, percentage, and pass state", () => {
  const questions = [{ correct: 0 }, { correct: 1 }, { correct: 2 }, { correct: 3 }];
  
  const full = calculateScore({ 0: 0, 1: 1, 2: 2, 3: 3 }, questions);
  assert.deepEqual(full, { score: 4, total: 4, percentage: 100, passed: true });

  const threeOfFour = calculateScore({ 0: 0, 1: 1, 2: 2, 3: 0 }, questions);
  assert.deepEqual(threeOfFour, { score: 3, total: 4, percentage: 75, passed: true });

  const twoOfFour = calculateScore({ 0: 0, 1: 1, 2: 0, 3: 0 }, questions);
  assert.deepEqual(twoOfFour, { score: 2, total: 4, percentage: 50, passed: false });
});

test("formatTime pads seconds and handles bounds", () => {
  assert.equal(formatTime(900), "15:00");
  assert.equal(formatTime(600), "10:00");
  assert.equal(formatTime(65), "1:05");
  assert.equal(formatTime(9), "0:09");
  assert.equal(formatTime(0), "0:00");
  assert.equal(formatTime(-10), "0:00");
});

test("getQuestionStatus categorizes active, answered, skipped, and unvisited", () => {
  const visited = new Set([0, 1, 2]);
  const answers = { 1: 0 };

  assert.equal(getQuestionStatus(0, 0, answers, visited), "current");
  assert.equal(getQuestionStatus(1, 0, answers, visited), "answered");
  assert.equal(getQuestionStatus(2, 0, answers, visited), "skipped");
  assert.equal(getQuestionStatus(3, 0, answers, visited), "unvisited");
});

test("shuffleQuestion preserves correct option value while altering indices", () => {
  const original = {
    id: 1,
    prompt: "Test question",
    options: ["Alpha", "Beta", "Gamma", "Delta"],
    correct: 2, // "Gamma"
  };

  for (let i = 0; i < 20; i++) {
    const shuffled = shuffleQuestion(original);
    assert.equal(shuffled.options.length, 4);
    assert.equal(shuffled.options[shuffled.correct], "Gamma");
  }
});

function createShuffledQuiz(questions, count = 25) {
  return shuffleArray(questions).slice(0, count).map(shuffleQuestion);
}

test("createShuffledQuiz samples exact count from bank", () => {
  const bank = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    options: ["A", "B", "C", "D"],
    correct: 0,
  }));

  const sample = createShuffledQuiz(bank, 25);
  assert.equal(sample.length, 25);
});

test("concentric option generator produces 4 unique combinations for boundary ring counts", () => {
  function getConcentricOptions(targetRings, targetFilled) {
    const distRings1 = targetRings === 1 ? 2 : targetRings === 5 ? 4 : targetRings - 1;
    const distRings2 = targetRings === 1 ? 3 : targetRings === 5 ? 3 : targetRings + 1;
    return [
      `${targetRings}-${targetFilled}`,
      `${targetRings}-${!targetFilled}`,
      `${distRings1}-${targetFilled}`,
      `${distRings2}-${!targetFilled}`,
    ];
  }

  for (const r of [1, 2, 3, 4, 5]) {
    for (const f of [true, false]) {
      const opts = getConcentricOptions(r, f);
      const unique = new Set(opts);
      assert.equal(unique.size, 4, `Expected 4 unique options for rings=${r}, filled=${f}`);
    }
  }
});

test("deductive question bank contains exactly 25 validated questions and answers", () => {
  const content = fs.readFileSync(new URL("../data/deductiveQuestions.tsx", import.meta.url), "utf8");
  const jsCode = content.replace(/import .*;/, "").replace(/export const DEDUCTIVE_QUESTIONS: Question\[\] =/, "const DEDUCTIVE_QUESTIONS =") + "; DEDUCTIVE_QUESTIONS;";
  const questions = eval(jsCode);

  assert.equal(questions.length, 25, "Must contain exactly 25 deductive questions");

  const seenIds = new Set();
  questions.forEach((q, idx) => {
    assert.ok(q.id, `Question ${idx} missing id`);
    assert.ok(!seenIds.has(q.id), `Duplicate question id ${q.id}`);
    seenIds.add(q.id);

    assert.equal(q.type, "deductive", `Question ${q.id} type must be deductive`);
    assert.ok(q.prompt && q.prompt.length > 5, `Question ${q.id} prompt is invalid`);
    assert.ok(Array.isArray(q.sequence) && q.sequence.length >= 2, `Question ${q.id} sequence must contain at least 2 premises`);
    assert.ok(Array.isArray(q.options) && q.options.length === 4, `Question ${q.id} must have exactly 4 choices`);
    assert.equal(new Set(q.options).size, 4, `Question ${q.id} has duplicate options`);
    assert.ok(typeof q.correct === "number" && q.correct >= 0 && q.correct <= 3, `Question ${q.id} correct answer index must be 0..3`);
    assert.ok(q.rule && q.rule.length > 10, `Question ${q.id} rule explanation is invalid`);

    // Verify shuffling maintains integrity
    const shuffled = shuffleQuestion(q);
    assert.equal(shuffled.options.length, 4);
    assert.equal(shuffled.options[shuffled.correct], q.options[q.correct]);
  });
});

