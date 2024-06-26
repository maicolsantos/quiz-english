'use client'
import { cn } from '@/lib/utils'
import { useScore } from '@/store/useScore'
import { MessageCircleQuestion } from 'lucide-react'
import { Score } from './score'
import { Settings } from './settings'

type HeaderProps = {
  totalQuestions: number
}

export const Header = ({ totalQuestions }: HeaderProps) => {
  const { correctAnswers, wrongAnswers } = useScore()
  const showScore = [...correctAnswers, ...wrongAnswers].length > 0

  return (
    <>
      <header className="py-4 mb-8">
        <div
          className={cn(
            'md:flex items-end justify-between space-y-4 md:space-y-0 mb-2',
            {
              flex: !showScore,
            },
          )}
        >
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            <MessageCircleQuestion size={40} />
            Quiz English
          </h1>
          <div className="flex gap-2 justify-between">
            <Score />
            <Settings />
          </div>
        </div>
        <small className="text-sm font-medium leading-none text-muted-foreground">
          All questions created with chatGPT ({totalQuestions} questions)
        </small>
      </header>
    </>
  )
}
