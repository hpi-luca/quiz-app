import React from "react"

const QuestionCount: React.FC<QuestionCountProps> = (props) => (
  <div className="questionCount">
    Question <span>{props.counter}</span> of <span>{props.total}</span>
  </div>
)

interface QuestionCountProps {
  counter: number,
  total: number,
}

export default QuestionCount
