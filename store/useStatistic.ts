import { create } from "zustand";

interface StatisticState {
  userPoints: number;
  factionPoints: { sleep: number, vigilant: number }
  setUserPoints: (p: number) => void;
  setFactionPoinsts: ({ sleep, vigilant }: { sleep: number, vigilant: number }) => void
}

export const useStatistic = create<StatisticState>()((set) => ({
  userPoints: 0,
  setUserPoints: (a) => set(() => ({ userPoints: a })),
  factionPoints: { sleep: 0, vigilant: 0 },
  setFactionPoinsts: (a) => set(() => ({ factionPoints: a })),

}));
