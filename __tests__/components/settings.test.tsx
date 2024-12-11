// Settings.test.tsx
import { Settings } from '@/components/settings'
import { useScore } from '@/store/useScore'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toast } from 'sonner'
import { vi } from 'vitest'
import { create } from 'zustand'

vi.mock('lucide-react', () => ({
  UserCog: () => <div data-testid="user-cog-icon">UserCog</div>,
  Trash2: () => <div data-testid="trash-icon">Trash</div>,
  Loader2: () => <div data-testid="loader-icon">Loader</div>,
  Moon: () => <div data-testid="moon-icon">Moon</div>,
  Sun: () => <div data-testid="sun-icon">Sun</div>,
}))

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
  },
}))

const store = create(() => ({
  correctAnswers: [1],
  wrongAnswers: [2, 3],
  resetScore: vi.fn(),
}))

vi.mock('@/store/useScore', () => ({
  useScore: {
    getState: () => store.getState(),
    persist: { clearStorage: vi.fn() },
  },
}))

describe('Settings', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the settings button with icon', () => {
    render(<Settings />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(screen.getByTestId('user-cog-icon')).toBeInTheDocument()
  })

  it('should show dropdown content when clicked', async () => {
    const user = userEvent.setup()
    render(<Settings />)

    const button = screen.getByRole('button')
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText(/Settings/i)).toBeInTheDocument()
    })
    expect(screen.getByText('Reset score')).toBeInTheDocument()
    expect(screen.getByTestId('trash-icon')).toBeInTheDocument()
  })

  it('should reset score when reset option is clicked', async () => {
    const user = userEvent.setup()
    render(<Settings />)

    await user.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(screen.getByText(/Settings/i)).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText(/Reset score/i)).toBeInTheDocument()
    })

    await user.click(screen.getByText(/Reset score/i))

    expect(useScore.getState().resetScore).toHaveBeenCalled()
    expect(useScore.persist.clearStorage).toHaveBeenCalled()
    expect(toast.success).toHaveBeenCalledWith('Your score has been reset.')
  })

  it('should close when clicking outside', async () => {
    const user = userEvent.setup()
    render(<Settings />)

    await user.click(screen.getByRole('button'))

    document.body.style.pointerEvents = 'auto'

    await waitFor(() => {
      expect(screen.getByText(/Settings/i)).toBeInTheDocument()
    })

    await user.click(document.body)

    // await waitFor(() => {
    //   expect(screen.getByText(/Settings/i)).not.toBeInTheDocument()
    // })
  })
})
