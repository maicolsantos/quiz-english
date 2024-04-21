'use client'
import type { QuizObject } from '@/@types/quiz'
import { useEffect, useState } from 'react'
import { Options } from './options'
import { Question } from './question'
import { Badge } from './ui/badge'

type QuestionContainerProps = {
  data: QuizObject
}

export const QuestionContainer = ({ data }: QuestionContainerProps) => {
  const [loadingFirstQuestion, setLoadingFirstQuestion] = useState(true)
  const [questionItem, setQuestionItem] = useState(0)

  const questionLength = data.quiz.questions.length || 0

  const getRandomQuestion = () => {
    const randomNumber = Math.floor(Math.random() * questionLength)
    setQuestionItem(randomNumber)
    setLoadingFirstQuestion(false)

    return randomNumber
  }

  useEffect(() => {
    getRandomQuestion()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      {loadingFirstQuestion && <p>Loading...</p>}
      {!loadingFirstQuestion && (
        <>
          <div className="flex items-end gap-2">
            <Badge variant="destructive">
              {data.quiz.questions[questionItem].level}
            </Badge>
          </div>
          <Question question={data.quiz.questions[questionItem].question} />
          <Options
            options={data.quiz.questions[questionItem].options}
            correctOption={data.quiz.questions[questionItem].correct_option}
            handleNextQuestion={getRandomQuestion}
          />
        </>
      )}
    </div>
  )
}
