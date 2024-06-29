import { create } from "zustand";

export interface UserVerification {
  bio: string;
  custody: string;
  displayName: string;
  fid: number;
  message: string;
  nonce: string;
  pfpUrl: string;
  signature: string;
  state: string;
  username: string;
  verifications: string[];
}
interface ConnectState {
  address: string;
  provider: any;
  warpcastUser?: UserVerification;
  setProvider: (provider: { address: string; provider: any }) => void;
  setWarpcastUser: (user: UserVerification) => void;
}

export const useConnect = create<ConnectState>()((set) => ({
  address: "",
  provider: undefined,
  warpcastUser: undefined,
  setProvider: (a) => set(() => ({ address: a.address, provider: a.provider })),
  setWarpcastUser: (u) => set(() => ({ warpcastUser: u })),
}));
