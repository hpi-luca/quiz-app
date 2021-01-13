import React from "react"

const AnswerOption: React.FC<AnswerOptionProps> = (props) => (
  <li className="answerOption">
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      checked={props.answer === props.answerContent}
      id={props.answerContent}
      value={props.answerContent}
      onChange={props.onAnswerSelected}
    />
    <label className="radioCustomLabel" htmlFor={props.answerContent}>
      {props.answerContent}
    </label>
  </li>
)

interface AnswerOptionProps {
  answerContent: string
  answer: string
  onAnswerSelected: (event: any) => void
}

export default AnswerOption
