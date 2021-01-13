import React from 'react'
import logo from './assets/images/logo.svg'
import './App.css'

import Result from "./components/Result"
import Quiz from "./components/Quiz"

import { UseQuiz } from "./store"

import quizQuestions from "./data/quiz"
import { AnimatePresence } from "framer-motion"

function App() {
  const quiz = UseQuiz()

  React.useEffect(() => {
    console.log("yep")
    quiz.dispatch(quiz.actions.setQuestions(quizQuestions))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>React Quiz</h2>
      </div>
        {quiz.result
          ? <Result quizResult={quiz.result}/>
          : renderQuiz()
        }
    </div>
  )

  function renderQuiz() {
    return (
      <Quiz
        answer={quiz.answer}
        answerOptions={quiz.answerOptions}
        questionId={quiz.questionId}
        question={quiz.question}
        questionTotal={quiz.questions.length}
        onAnswerSelected={handleAnswerSelected}
      />
    )
  }

  function handleAnswerSelected(event: any) {
    quiz.dispatch(quiz.actions.setQuestionAnswer(event.currentTarget.value))

    if (quiz.questionId < quiz.questions.length) {
      setTimeout(() => quiz.dispatch(quiz.actions.setNextQuestion()), 300);
    } else {
      setTimeout(() => quiz.dispatch(quiz.actions.setResult()), 300);
    }
  }
}

export default App;
