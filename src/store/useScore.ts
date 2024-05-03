import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Store = {
  correctAnswers: number[]
  setCorrectAnswers: (correctAnswer: number) => void
  wrongAnswers: number[]
  setWrongAnswers: (wrongAnswer: number) => void
  resetScore: () => void
}

export const SCORE_STORAGE_KEY = 'QE/score'

export const useScore = create<Store>()(
  persist(
    (set, get) => ({
      correctAnswers: [],
      setCorrectAnswers: (correctAnswer) => {
        set(() => {
          const { correctAnswers } = get()

          if (correctAnswers.includes(correctAnswer)) {
            return { correctAnswers }
          }

          return {
            correctAnswers: [...correctAnswers, correctAnswer],
          }
        })
      },
      wrongAnswers: [],
      setWrongAnswers: (wrongAnswer) => {
        set(() => {
          const { wrongAnswers } = get()

          if (wrongAnswers.includes(wrongAnswer)) {
            return { wrongAnswers }
          }

          return {
            wrongAnswers: [...wrongAnswers, wrongAnswer],
          }
        })
      },
      resetScore: () => set({ correctAnswers: [], wrongAnswers: [] }),
    }),
    { name: SCORE_STORAGE_KEY },
  ),
)
