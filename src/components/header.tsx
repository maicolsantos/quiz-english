import { MessageCircleQuestion } from 'lucide-react'
import { ToggleTheme } from './toggleTheme'

type HeaderProps = {
  totalQuestions: number
}

export const Header = ({ totalQuestions }: HeaderProps) => {
  return (
    <>
      <header className="py-4  mb-8">
        <div className="flex items-end justify-between">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            <MessageCircleQuestion size={40} />
            Quiz English
          </h1>
          <ToggleTheme />
        </div>
        <small className="text-sm font-medium leading-none text-muted-foreground">
          All questions created with chatGPT ({totalQuestions} questions)
        </small>
      </header>
    </>
  )
}
