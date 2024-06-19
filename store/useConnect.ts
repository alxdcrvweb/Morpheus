import { create } from "zustand";

interface ConnectState {
  address: string;
  provider: any;
  setProvider: (provider: {
    address: string,
    provider: any
  }) => void;
}

export const useConnect = create<ConnectState>()((set) => ({
  address: "",
  provider: undefined,
  setProvider: (a) => set(() => ({ address: a.address, provider: a.provider })),
}));
