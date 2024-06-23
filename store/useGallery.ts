import { create } from "zustand";

export interface IGallery {
  gallery: any[];
  setGallery: (g: any[]) => void;
}

export const useGallery = create<IGallery>()((set) => ({
  gallery: [],
  setGallery: (u:any) => set(() => ({ gallery: u })),
}));
