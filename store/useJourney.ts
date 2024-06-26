import { create } from "zustand";

interface JourneyState {
  currentType: string;
  setCurrentType?: (s: string) => void;
}

export const useJourney = create<JourneyState>()((set) => ({
  currentType: "All",
  setCurrentType: (a) => set(() => ({ currentType: a })),
}));
