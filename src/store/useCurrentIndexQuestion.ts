import { create } from 'zustand'

type Store = {
  currentIndexQuestion: number
  setCurrentIndexQuestion: (currentIndexQuestion: number) => void
}

export const useCurrentIndexQuestion = create<Store>()((set) => ({
  currentIndexQuestion: 0,
  setCurrentIndexQuestion: (currentIndexQuestion) =>
    set(() => ({ currentIndexQuestion })),
}))
