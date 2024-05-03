'use client'
import type { Options as OptionsType } from '@/@types/quiz'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'
import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

type OptionsProps = {
  options: OptionsType
  correctOption: string
  explanation: string
  handleNextQuestion: () => void
}

export const Options = ({
  options,
  correctOption,
  explanation,
  handleNextQuestion,
}: OptionsProps) => {
  const [checkAnswerClicked, setCheckAnswerClicked] = useState(false)
  const [optionSelected, setOptionSelected] = useState('')
  const isCorrect = optionSelected === correctOption

  const handleNext = () => {
    setCheckAnswerClicked(false)
    setOptionSelected('')
    handleNextQuestion()
  }

  return (
    <>
      <RadioGroup
        className="space-y-2"
        onValueChange={setOptionSelected}
        value={optionSelected}
        disabled={checkAnswerClicked}
      >
        {Object.keys(options || {})?.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={option} />
            <Label
              htmlFor={option}
              className={cn({
                'text-green-500':
                  (optionSelected === option &&
                    option === correctOption &&
                    checkAnswerClicked &&
                    isCorrect) ||
                  (checkAnswerClicked && correctOption === option),
                'text-red-500':
                  optionSelected === option &&
                  option !== correctOption &&
                  checkAnswerClicked &&
                  !isCorrect,
              })}
            >
              {options[option]}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {checkAnswerClicked && explanation && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>{explanation}</AlertDescription>
        </Alert>
      )}
      <div className="w-full flex flex-col gap-6 mt-8">
        <Button
          variant="secondary"
          disabled={optionSelected.length === 0}
          className={cn('w-full', {
            'bg-green-500 hover:bg-green-500 text-white':
              checkAnswerClicked && isCorrect,
            'bg-red-500 hover:bg-red-500 text-white':
              checkAnswerClicked && !isCorrect,
          })}
          onClick={() => {
            !checkAnswerClicked ? setCheckAnswerClicked(true) : handleNext()
          }}
        >
          {!checkAnswerClicked ? 'Check the answer' : 'Next question'}
        </Button>
      </div>
    </>
  )
}
