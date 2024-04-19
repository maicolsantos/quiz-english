import { AnswerItem } from '@/components/answerItem'
import { Question } from '@/components/question'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MessageCircleQuestion } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="flex items-end gap-2 mb-8">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          <MessageCircleQuestion size={40} />
          Trivia English
        </h1>
        <Badge variant="destructive">C1</Badge>
      </div>
      <div className="flex flex-col gap-4">
        <Question />
        <AnswerItem />
        <div className="w-full block mt-8">
          <Button variant="secondary" className="w-full">
            Check Answer
          </Button>
        </div>
      </div>
    </div>
  )
}
