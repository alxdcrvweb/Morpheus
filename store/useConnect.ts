import { mintAbi, mintContract } from "@/utils/contracts/mint";
import { towerAbi, towerContract } from "@/utils/contracts/tower";
import Web3 from "web3";
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
  ens?: string;
  provider: any;
  warpcastUser?: UserVerification;
  tower: any;
  mint: any;
  setProvider: (provider: {
    address: string;
    provider: any;
    ens?: string;
  }) => void;
  setWarpcastUser: (user: UserVerification) => void;
}

export const useConnect = create<ConnectState>()((set) => ({
  address: "",
  ens: undefined,
  provider: undefined,
  tower: undefined,
  mint: undefined,
  warpcastUser: undefined,
  setProvider: (a) => {
    const web3 = new Web3(a.provider);
    let mint = new web3.eth.Contract(mintAbi as any, mintContract);
    let tower = new web3.eth.Contract(towerAbi as any, towerContract);
    return set(() => ({
      address: a.address,
      provider: a.provider,
      tower: tower,
      mint: mint,
      ens: a.ens,
    }));
  },
  setWarpcastUser: (u) => set(() => ({ warpcastUser: u })),
}));
