export interface Options {
  [ket: string]: string
}
export interface Question {
  level: string
  question: string
  options: Options
  correct_option: string
  explanation?: string
}

export interface Quiz {
  title: string
  level: string[]
  questions: Question[]
}
export interface QuizObject {
  quiz: Quiz
}
