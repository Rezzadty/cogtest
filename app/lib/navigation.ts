import { type TestModel, MODEL_DURATION_SECONDS } from "@/app/lib/testModels";
import { type ScreenState } from "@/types/quiz";

export function handleNavModelClick(
  modelId: TestModel,
  screen: ScreenState,
  setPendingModel: (m: TestModel | null) => void,
  setNavWarnOpen: (v: boolean) => void,
  setSelectedModel: (m: TestModel) => void,
  setSecondsLeft: (s: number) => void
) {
  if (screen === "test" || screen === "results") {
    setPendingModel(modelId);
    setNavWarnOpen(true);
  } else {
    setSelectedModel(modelId);
    setSecondsLeft(MODEL_DURATION_SECONDS[modelId]);
  }
}