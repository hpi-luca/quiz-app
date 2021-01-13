import { Quiz } from "./Quiz"
import { Action } from "./actions"
import { PlagesResultat } from "../data/quiz"

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
      console.log("test")
      
      return {
        ...state,
        answer: action.answer.content,
        score: state.score + action.answer.score
      }
    case "setResult":
      let result = "error"
      PlagesResultat.reverse().forEach((plage) => {
        console.log(state.score, plage.scoreMin)
        if (state.score >= plage.scoreMin) {
          result = plage.message;
        }
      })

      return {
        ...state,
        result
      }
  }
}
