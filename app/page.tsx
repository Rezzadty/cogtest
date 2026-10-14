"use client";

import { useState, useEffect } from "react";
import { ScreenState, AnswerMap, Question } from "@/types/quiz";
import {
  TEST_MODELS,
  type TestModel,
  MODEL_DURATION_SECONDS,
  MODEL_INFO,
} from "@/app/lib/testModels"; 
import { QUESTION_BANKS } from "@/app/lib/questionBanks";
import { createShuffledQuiz, TEST_QUESTION_COUNT, calculateScore, formatTime, getQuestionStatus } from "@/lib/quiz";
import { Header } from "@/app/components/Header";
import { IntroScreen } from "@/app/components/Intro/IntroScreen";
import { TestScreen } from "@/app/components/Test/TestScreen";
import { ResultsScreen } from "@/app/components/Results/ResultsScreen";
import { ExitConfirmModal } from "@/app/components/Modals/ExitConfirmModal";
import { SubmitConfirmModal } from "@/app/components/Modals/SubmitConfirmModal";
import { NavSwitchWarnModal } from "@/app/components/Modals/NavSwitchWarnModal";
import { handleNavModelClick } from "@/app/lib/navigation";

import { LoadingScreen } from "@/app/components/LoadingScreen";

export default function Home() {
  const [screen, setScreen] = useState<ScreenState>("intro");
  const [selectedModel, setSelectedModel] = useState<TestModel>("abstract");
  const [submitConfirmOpen, setSubmitConfirmOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exitConfirmOpen, setExitConfirmOpen] = useState(false);
  const [navWarnOpen, setNavWarnOpen] = useState(false);
  const [navDirection, setNavDirection] = useState<"forward" | "backward">("forward");
  const [pendingModel, setPendingModel] = useState<TestModel | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(() =>
    createShuffledQuiz(QUESTION_BANKS.abstract || [], TEST_QUESTION_COUNT)
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [secondsLeft, setSecondsLeft] = useState(MODEL_DURATION_SECONDS.abstract);
  const [filter, setFilter] = useState<"all" | "wrong" | "correct">("all");

  const currentDuration = MODEL_DURATION_SECONDS[selectedModel];

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (screen === "test") {
        e.preventDefault();
        e.returnValue = ""; // Triggers the browser's standard confirmation dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [screen]);

  useEffect(() => {
    if (screen !== "test") return;
    const interval = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(interval);
          setScreen("results");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [screen]);

  const handleStart = () => {
    const bank = QUESTION_BANKS[selectedModel] || QUESTION_BANKS.abstract || [];
    setActiveQuestions(createShuffledQuiz(bank, Math.min(TEST_QUESTION_COUNT, bank.length)));
    setAnswers({});
    setVisited(new Set([0]));
    setCurrentIdx(0);
    setSecondsLeft(currentDuration);
    setScreen("test");
  };

  const handleBackToMain = () => {
    setAnswers({});
    setVisited(new Set([0]));
    setCurrentIdx(0);
    setSecondsLeft(currentDuration);
    setScreen("intro");
  };

  const handleSelect = (choiceIdx: number) => {
    setAnswers((prev) => ({ ...prev, [currentIdx]: choiceIdx }));
  };

  const onModelClick = (modelId: TestModel) => {
    handleNavModelClick(modelId, screen, setPendingModel, setNavWarnOpen, setSelectedModel, setSecondsLeft);
  };

  const confirmNavSwitch = () => {
    if (pendingModel) {
      setSelectedModel(pendingModel);
      setSecondsLeft(MODEL_DURATION_SECONDS[pendingModel]);
      handleBackToMain();
      setPendingModel(null);
    }
    setNavWarnOpen(false);
  };

  const jumpTo = (idx: number, direction?: "forward" | "backward") => {
    setNavDirection(direction ?? (idx >= currentIdx ? "forward" : "backward"));
    setVisited((prev) => new Set(prev).add(idx));
    setCurrentIdx(idx);
  };

  const handleSkip = () => {
    const nextIdx = (currentIdx + 1) % activeQuestions.length;
    jumpTo(nextIdx, "forward");
  };

  const { score, percentage, passed } = calculateScore(answers, activeQuestions);
  const answeredCount = Object.keys(answers).length;
  const remainingCount = activeQuestions.length - answeredCount;
  const isLastQuestion = currentIdx === activeQuestions.length - 1;

  return (
    <LoadingScreen>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 flex flex-col font-sans transition-colors">
        <Header
          selectedModel={selectedModel}
          screen={screen}
          onModelClick={onModelClick}
          onMenuToggle={() => setMobileMenuOpen((v) => !v)}
          mobileMenuOpen={mobileMenuOpen}
        />
        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
          <div key={`${screen}-${selectedModel}`} className="w-full max-w-6xl animate-[screenIn_0.35s_ease-out]">
            {screen === "intro" && <IntroScreen selectedModel={selectedModel} onStart={handleStart} />}
            {screen === "test" && (
              <TestScreen
                activeQuestions={activeQuestions}
                currentIdx={currentIdx}
                secondsLeft={secondsLeft}
                answers={answers}
                visited={visited}
                navDirection={navDirection}
                onSelect={handleSelect}
                onJumpTo={jumpTo}
                onSkip={handleSkip}
                onExit={() => setExitConfirmOpen(true)}
                onSubmit={() => setSubmitConfirmOpen(true)}
                onPrevious={() => jumpTo(currentIdx - 1)}
                onNext={() => jumpTo(currentIdx + 1)}
                canGoPrevious={currentIdx > 0}
                isLastQuestion={isLastQuestion}
              />
            )}
            {screen === "results" && (
              <ResultsScreen
                activeQuestions={activeQuestions}
                answers={answers}
                score={score}
                percentage={percentage}
                passed={passed}
                filter={filter}
                onFilterChange={setFilter}
                onRetake={handleStart}
                onBackToMain={handleBackToMain}
              />
            )}
          </div>
        </main>
        <ExitConfirmModal isOpen={exitConfirmOpen} onClose={() => setExitConfirmOpen(false)} onExit={handleBackToMain} />
        <SubmitConfirmModal
          isOpen={submitConfirmOpen}
          onClose={() => setSubmitConfirmOpen(false)}
          onSubmit={() => setScreen("results")}
          answeredCount={answeredCount}
          totalQuestions={activeQuestions.length}
          remainingCount={remainingCount}
        />
        <NavSwitchWarnModal isOpen={navWarnOpen} onClose={() => { setNavWarnOpen(false); setPendingModel(null); }} onConfirm={confirmNavSwitch} />
      </div>
    </LoadingScreen>
  );
}