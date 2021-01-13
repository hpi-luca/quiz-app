import React from "react"
import QuestionCount from "./QuestionCount"
import Question from "./Question"
import AnswerOption from "./AnswerOption"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Answer } from "../store"

const Quiz: React.FC<QuizProps> = (props) => (
  <div className="container">
    <TransitionGroup appear>
      <CSSTransition classNames="fade" timeout={200}>
        <div key={props.questionId}>
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
          <Question content={props.question} />
          <ul className="answerOptions">
            {props.answerOptions.map((key) => (
              <AnswerOption
                key={key.content}
                answerContent={key.content}
                answer={props.answer}
                onAnswerSelected={props.onAnswerSelected}
              />
            ))}
          </ul>
        </div>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

interface QuizProps {
  answer: string,
  answerOptions: Answer[],
  question: string,
  questionId: number,
  questionTotal: number,
  onAnswerSelected: (event: any) => void,
}

export default Quiz
