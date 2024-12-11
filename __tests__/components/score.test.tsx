/* eslint-disable @typescript-eslint/no-explicit-any */
import { Score } from '@/components/score'
import { useScore } from '@/store/useScore'
import { render, screen } from '@testing-library/react'
import { create } from 'zustand'

vi.mock('@/store/useScore', () => ({
  useScore: vi.fn(),
}))

const createTestStore = (
  initialState = {
    correctAnswers: [] as number[],
    wrongAnswers: [] as number[],
  },
) => {
  return create()(() => ({ ...initialState }))
}

describe('Score', () => {
  it('should render empty', () => {
    const useTestScore = createTestStore({
      correctAnswers: [],
      wrongAnswers: [],
    })
    ;(useScore as any).mockImplementation(() => useTestScore())

    const { container } = render(<Score />)
    expect(container.firstChild).toBeNull()
  })

  it('should render 2 buttons', () => {
    const useTestScore = createTestStore({
      correctAnswers: [1],
      wrongAnswers: [2, 3],
    })
    ;(useScore as any).mockImplementation(() => useTestScore())

    render(<Score />)
    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(2)
    expect(buttons[0]).toHaveTextContent('1')
    expect(buttons[1]).toHaveTextContent('2')
  })
})
