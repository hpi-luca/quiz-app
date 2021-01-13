export interface Quiz {
  questions: Question[],
  counter: number,
  questionId: number,
  question: string,
  answerOptions: Answer[],
  answer: string,
  score: number,
  result: string,
}

export interface Question {
  question: string,
  answers: Answer[],
}

export interface Answer {
  score: number,
  content: string,
}

export const initialQuiz: Quiz = {
  questions: [],
  counter: 0,
  questionId: 1,
  question: "",
  answerOptions: [],
  answer: "",
  score: 0,
  result: ""
}
