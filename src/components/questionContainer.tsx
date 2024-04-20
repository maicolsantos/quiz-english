import type { Question as QuestionType } from '@/@types/quiz'
import { Options } from './options'
import { Question } from './question'
import { Badge } from './ui/badge'

type QuestionContainerProps = {
  data: QuestionType
}

export const QuestionContainer = ({ data }: QuestionContainerProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-2">
        <Badge variant="destructive">{data.level}</Badge>
      </div>
      <Question question={data.question} />
      <Options options={data.options} correctOption={data.correct_option} />
    </div>
  )
}
