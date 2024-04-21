'use server'
import type { QuizObject } from '@/@types/quiz'
import { Header } from '@/components/header'
import { QuestionContainer } from '@/components/questionContainer'
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8')
  const data: QuizObject = JSON.parse(file)

  return (
    <div className="max-w-5xl mx-auto p-5 md:p-10">
      <Header />
      <QuestionContainer data={data} />
    </div>
  )
}
