import { MessageCircleQuestion } from 'lucide-react'
import { ToggleTheme } from './toggleTheme'

export const Header = () => {
  return (
    <>
      <header className="py-4  mb-8">
        <div className="flex items-center justify-between">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            <MessageCircleQuestion size={40} />
            Quiz English
          </h1>
          <ToggleTheme />
        </div>
        <small className="text-sm font-medium leading-none text-muted-foreground">
          All questions were created with chatGPT
        </small>
      </header>
    </>
  )
}
