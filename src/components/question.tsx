type QuestionProps = {
  question: string
}

export const Question = ({ question }: QuestionProps) => {
  return (
    <p>
      {/*  eslint-disable-next-line react/no-unescaped-entities */}
      {question}
    </p>
  )
}
