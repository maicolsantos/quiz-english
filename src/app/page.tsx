import { AnswerItem } from '@/components/answerItem'
import { Header } from '@/components/header'
import { Question } from '@/components/question'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-5 md:p-10">
      <Header />
      <div className="flex flex-col gap-4">
        <div className="flex items-end gap-2 ">
          <Badge variant="destructive">C1</Badge>
        </div>
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
