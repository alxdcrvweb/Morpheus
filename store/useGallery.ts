import { create } from "zustand";
export interface IChar {
  _id: string;
  tokenId: number;
  owner: string;
  image: string;
  name: string;
  faction: number;
  proof: string[];
  stakedIn?: string;
  metadata: [
    {
      trait_type: string;
      value: string;
      _id: string;
    }
  ];
}
export interface IGallery {
  myGallery?: IChar[];
  holderGallery?: IChar[];
  oneChar?: IChar;
  setMyGallery?: (g: IChar[]) => void;
  setHolderGallery?: (g: IChar[]) => void;

  setOneChar?: (g: IChar) => void;
}

export const useGallery = create<IGallery>()((set) => ({
  myGallery: [],
  holderGallery: [],
  oneChar: undefined,
  setOneChar: (u: IChar) => set(() => ({ oneChar: u })),
  setMyGallery: (u: IChar[]) => set(() => ({ myGallery: u })),
  setHolderGallery: (u: IChar[]) => set(() => ({ holderGallery: u })),
}));
