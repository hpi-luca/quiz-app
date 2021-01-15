import { Quiz, ResultRange } from "./Quiz"
import { Action } from "./actions"
import { plagesResultat } from "../data/quiz"
import { shuffleAnswers } from "../helpers/utils"

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
        questions: shuffleAnswers(action.questions),
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
      let resultRange: ResultRange = plagesResultat[0]

      plagesResultat.forEach((range) => {
        if (state.score >= resultRange.scoreMin && state.score >= range.scoreMin) {
          resultRange = range;
        }
      })

      return {
        ...state,
        result: resultRange
      }
  }
}
