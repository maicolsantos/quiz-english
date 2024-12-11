import { Header } from '@/components/header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
  it('should render h1 tag containing Quiz English', () => {
    render(<Header totalQuestions={0} />)
    const heading = screen.getByRole('heading', {
      name: /Quiz English/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
