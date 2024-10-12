import { create } from "zustand";

interface StatisticState {
  userPoints: number;
  setUserPoints: (p: number) => void;
}

export const useStatistic = create<StatisticState>()((set) => ({
  userPoints: 0,
  setUserPoints: (a) => set(() => ({ userPoints: a })),
}));
