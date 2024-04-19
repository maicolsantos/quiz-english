import { AnswerItem } from '@/components/answerItem'
import { Question } from '@/components/question'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-4">
        Trivia English
      </h1>

      <Question />
      <AnswerItem />
    </div>
  )
}
