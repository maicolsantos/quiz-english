import type { QuizObject } from '@/@types/quiz'
import { Header } from '@/components/header'
import { Options } from '@/components/options'
import { Question } from '@/components/question'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8')
  const data: QuizObject = JSON.parse(file)

  return (
    <div className="max-w-5xl mx-auto p-5 md:p-10">
      <Header />
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-2 ">
          <Badge variant="destructive">C1</Badge>
        </div>
        <Question question={data.quiz.questions[0].question} />
        <Options
          options={data.quiz.questions[0].options}
          correctOption={data.quiz.questions[0].correct_option}
        />
        <div className="w-full block mt-8">
          <Button variant="secondary" className="w-full">
            Check Answer
          </Button>
        </div>
      </div>
    </div>
  )
}
