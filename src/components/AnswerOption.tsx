import React from 'react'

const AnswerOption: React.FC<AnswerOptionProps> = (props) => {
  console.log(props.answerType, props.answer)
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={!!props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  )
}

interface AnswerOptionProps {
  answerType: string,
  answerContent: string,
  answer: string,
  onAnswerSelected: (event: any) => void
}

export default AnswerOption;
