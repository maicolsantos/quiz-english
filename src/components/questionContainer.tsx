'use client'
import type { QuizObject } from '@/@types/quiz'
import { useCurrentIndexQuestion } from '@/store/useCurrentIndexQuestion'
import { useEffect, useState } from 'react'
import { Options } from './options'
import { Question } from './question'
import { QuestionLoading } from './questionLoading'
import { Badge } from './ui/badge'

type QuestionContainerProps = {
  data: QuizObject
}

export const QuestionContainer = ({ data }: QuestionContainerProps) => {
  const { currentIndexQuestion, setCurrentIndexQuestion } =
    useCurrentIndexQuestion()
  const [loadingFirstQuestion, setLoadingFirstQuestion] = useState(true)

  const questionLength = data.quiz.questions.length || 0

  const getRandomQuestion = () => {
    const randomNumber = Math.floor(Math.random() * questionLength)
    setCurrentIndexQuestion(randomNumber)
    setLoadingFirstQuestion(false)

    return randomNumber
  }

  useEffect(() => {
    getRandomQuestion()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      {loadingFirstQuestion && <QuestionLoading />}
      {!loadingFirstQuestion && (
        <>
          <div className="flex items-end">
            <Badge variant="destructive">
              {data.quiz.questions[currentIndexQuestion].level}
            </Badge>
          </div>
          <Question
            question={data.quiz.questions[currentIndexQuestion].question}
          />
          <Options
            options={data.quiz.questions[currentIndexQuestion].options}
            correctOption={
              data.quiz.questions[currentIndexQuestion].correct_option
            }
            explanation={
              data.quiz.questions[currentIndexQuestion].explanation || ''
            }
            handleNextQuestion={getRandomQuestion}
          />
        </>
      )}
    </div>
  )
}
