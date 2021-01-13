import { Answer, Question } from "./Quiz"

export type Action =
  | { type: "setQuestions"; questions: Question[] }
  | { type: "setNextQuestion" }
  | { type: "setQuestionAnswer"; answer: Answer }
  | { type: "setResult" };

/**
 * Actions dispatchable to the Quiz Reducer
 */
export const Actions = {
  setQuestions: (questions: Question[]): Action => ({
    questions,
    type: "setQuestions"
  }),
  setNextQuestion: (): Action => ({
    type: "setNextQuestion"
  }),
  setQuestionAnswer: (answer: Answer): Action => ({
    answer,
    type: "setQuestionAnswer"
  }),
  setResult: (): Action => ({
    type: "setResult"
  })
};
