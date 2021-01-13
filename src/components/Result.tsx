import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
const Result: React.FC<ResultProps> = (props) => {

  // @ts-ignore
 window.gtag("event", "quiz terminé", {
    "resultat": props.quizResult,
  })

  return (
    <TransitionGroup appear>
      <CSSTransition classNames="fade" timeout={200}>
        <div className="container result">
          {props.quizResult}
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

interface ResultProps {
  quizResult: string,
}

export default Result
