export interface Quiz {
  questions: Question[]
  counter: number,
  questionId: number,
  question: string,
  answerOptions: Answer[],
  answer: string,
  answersCount: Record<string, number>,
  result: string
}

export interface Question {
  question: string,
  answers: Answer[]
}

export interface Answer {
  type: string,
  content: string
}

export const initialQuiz: Quiz = {
  questions: [],
  counter: 0,
  questionId: 1,
  question: '',
  answerOptions: [],
  answer: '',
  answersCount: {},
  result: ''
}

