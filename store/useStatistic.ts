import { create } from "zustand";

interface StatisticState {
  stats: string;
  setStats: (s: string) => void;
}

export const useStatistic = create<StatisticState>()((set) => ({
  stats: "All",
  setStats: (a) => set(() => ({ stats: a })),
}));
