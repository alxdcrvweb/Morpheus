import { create } from "zustand";

interface StatisticState {
  currentType: string;
  setCurrentType: (s: string) => void;
}

export const useStatistic = create<StatisticState>()((set) => ({
  currentType: "All",
  setCurrentType: (a) => set(() => ({ currentType: a })),
}));
