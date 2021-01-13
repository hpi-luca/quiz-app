import React from 'react'

const Question: React.FC<QuestionProps> = (props) => (
  <h2 className="question">{props.content}</h2>
)

interface QuestionProps {
  content: string
}

export default Question;
