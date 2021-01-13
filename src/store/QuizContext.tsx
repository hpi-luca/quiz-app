import * as React from "react"

import { Action, Actions } from "./actions"
import { initialQuiz, Quiz } from "./Quiz"
import { Reducer } from "./reducer"


/**
 * Quiz context holding session data and leveraging a reducer to alter it
 */
const QuizContext = React.createContext<[Quiz, React.Dispatch<Action>]>([
  initialQuiz,
  (action: Action) => { /* Empty */ },
])


/**
 * Component providing the SessionContext to its children
 * @param props
 */
const QuizProvider = (props: { children: React.ReactChild }) => {
  return (
    <QuizContext.Provider value={React.useReducer(Reducer, initialQuiz)}>
      {props.children}
    </QuizContext.Provider>
  )
}

/**
 * Custom hook to use the SessionContext
 */
const UseQuiz = () => {
  const [state, dispatch] = React.useContext(QuizContext)

  return {
    actions: Actions,
    dispatch,
    ...state,
  }
}

export {
  UseQuiz,
  QuizContext,
  QuizProvider,
}
