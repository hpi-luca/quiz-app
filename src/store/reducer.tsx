import { Quiz } from "./Quiz"
import { Action } from "./actions"
import { plagesResultat } from "../data/quiz"

/**
 * Reduce the current state according to the specified action and returns the new state
 * @param state Current session state
 * @param action Action to apply to the state
 */
export function Reducer(state: Quiz, action: Action): Quiz {
  switch (action.type) {
    case "setQuestions":
      return {
        ...state,
        questions: action.questions,
        question: action.questions[0].question,
        answerOptions: action.questions[0].answers
      }
    case "setNextQuestion":
      const counter = state.counter + 1

      return {
        ...state,
        counter,
        questionId: state.questionId + 1,
        question: state.questions[counter].question,
        answerOptions: state.questions[counter].answers,
        answer: ""
      }
    case "setQuestionAnswer":
      return {
        ...state,
        answer: action.answer.content,
        score: state.score + action.answer.score
      }
    case "setResult":
      let result: { message: string, scoreMin: number } = { message: "lol", scoreMin: 0 }

      plagesResultat.forEach((plage) => {
        if (state.score >= result.scoreMin && state.score >= plage.scoreMin) {
          result = plage;
        }
      })

      return {
        ...state,
        result: result.message
      }
  }
}
