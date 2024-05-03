'use client'
import { useScore } from '@/store/useScore'
import { CircleCheck, CircleX } from 'lucide-react'
import { Button } from './ui/button'

export const Score = () => {
  const { correctAnswers, wrongAnswers } = useScore()
  const showScore = [...correctAnswers, ...wrongAnswers].length > 0

  return (
    <>
      {showScore && (
        <div className="flex gap-2">
          <Button className="flex gap-2 bg-green-500 hover:bg-green-400">
            <CircleCheck size={18} />
            {correctAnswers.length}
          </Button>
          <Button variant="destructive" className="flex gap-2 ">
            <CircleX size={18} />
            {wrongAnswers.length}
          </Button>
        </div>
      )}
    </>
  )
}
