import { Answer, Quiz } from "./Quiz"
import { Action } from "./actions"

/**
 * Reduce the current state according to the specified action and returns the new state
 * @param state Current session state
 * @param action Action to apply to the state
 */
export function Reducer(state: Quiz, action: Action): Quiz {
  switch (action.type) {
    case "setQuestions":
      return ({
        ...state,
        questions: action.questions,
        question: action.questions[0].question,
        answerOptions: action.questions[0].answers
      })
    case "setNextQuestion":
      const counter = state.counter + 1

      return ({
        ...state,
        counter,
        questionId: state.questionId + 1,
        question: state.questions[counter].question,
        answerOptions: state.questions[counter].answers,
        answer: ''
      })
    case "setQuestionAnswer":
      return ({
        ...state,
        answer: action.answer,
        answersCount: {
          ...state.answersCount,
          [action.answer]: (state.answersCount[action.answer] || 0) + 1
        },
      })
    case "setResult":
      let result: [string, number] = ["Undetermined", 0]
      Object.entries(state.answersCount).forEach((answerCount) => {
        if(!result || answerCount[1] > result[1]) {
          result = answerCount
        }
      })
      return ({
        ...state,
        result: result[0]
      })
  }
}
