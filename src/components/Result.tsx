import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const Result: React.FC<ResultProps> = (props) => (
  <TransitionGroup appear>
    <CSSTransition
      classNames="fade"
      timeout={200}
    >
    <div className="container result">
      You prefer <strong>{props.quizResult}</strong>!
    </div>
    </CSSTransition>
  </TransitionGroup>
)

interface ResultProps {
  quizResult: string
}

export default Result
