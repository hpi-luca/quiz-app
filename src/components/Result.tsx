import React from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { ResultRange } from "../store"

const Result: React.FC<ResultProps> = (props) => {
  // @ts-ignore
  window.gtag("event", "quiz terminé", {
    "resultat": props.quizResult,
  })

  return (
    <TransitionGroup appear>
      <CSSTransition classNames="fade" timeout={200}>
        <div className="result-page">
          <div className="result-section">
            <img className="result-illustration" src={props.quizResult.illustration} alt=""/>
            <div className="container result">
              <div dangerouslySetInnerHTML={{ __html: props.quizResult.message }}/>
            </div>
          </div>
          <a href="/" className="retry-link">Recommencer</a>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

interface ResultProps {
  quizResult: ResultRange,
}

export default Result
