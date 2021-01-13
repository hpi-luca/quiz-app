export type Action =
  | { type: "setQuestions", questions: Array<any> }
  | { type: "setNextQuestion" }
  | { type: "setQuestionAnswer", answer: string }
  | { type: "setResult" }


/**
 * Actions dispatchable to the Quiz Reducer
 */
export const Actions = {
  setQuestions: (questions: Array<any>): Action => ({
    questions,
    type: "setQuestions",
  }),
  setNextQuestion: (): Action => ({
    type: "setNextQuestion",
  }),
  setQuestionAnswer: (answer: string): Action => ({
    answer,
    type: "setQuestionAnswer"
  }),
  setResult: (): Action => ({
    type: "setResult"
  })

}
