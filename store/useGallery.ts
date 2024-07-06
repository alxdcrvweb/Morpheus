import { create } from "zustand";
export interface IChar {
  _id: string;
  tokenId: number;
  owner: string;
  image: string;
  name: string;
  metadata: [
    {
      trait_type: string;
      value: string;
      _id: string;
    }
  ];
}
export interface IGallery {
  gallery?: IChar[];
  oneChar?: IChar;
  setGallery?: (g: IChar[]) => void;
  setOneChar?: (g: IChar) => void;
}

export const useGallery = create<IGallery>()((set) => ({
  gallery: [],
  oneChar: undefined,
  setOneChar: (u: IChar) => set(() => ({ oneChar: u })),
  setGallery: (u: IChar[]) => set(() => ({ gallery: u })),
}));
