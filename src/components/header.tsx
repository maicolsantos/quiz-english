import { MessageCircleQuestion } from 'lucide-react'
import { ToggleTheme } from './toggleTheme'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-8">
        <MessageCircleQuestion size={40} />
        Quiz English
      </h1>
      <ToggleTheme />
    </header>
  )
}
