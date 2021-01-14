import React from "react"
import logo from "./assets/images/Altice_logo.png"

import Result from "./components/Result"
import Quiz from "./components/Quiz"

import { UseQuiz } from "./store"
import quizQuestions from "./data/quiz"

function App() {
  const quiz = UseQuiz()

  React.useEffect(() => {
    quiz.dispatch(quiz.actions.setQuestions(quizQuestions))
  }, [])

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>CAMPAGNE DE SENSIBILISATION <br />AU SEXISME ETHARCELEMENT SEXUEL</h2>
        <h3>stéréotype de genre / sexisme ordinaire</h3>
      </div>
      {quiz.result ? (
        <Result quizResult={quiz.result} />
      ) : (
        <Quiz
          answer={quiz.answer}
          answerOptions={quiz.answerOptions}
          questionId={quiz.questionId}
          question={quiz.question}
          questionTotal={quiz.questions.length}
          onAnswerSelected={handleAnswerSelected}
        />
      )}
    </div>
  );

  function handleAnswerSelected(event: any) {
    const answer = quiz.answerOptions.find(
      (answer) => answer.content === event.currentTarget.value
    )
    if (answer) quiz.dispatch(quiz.actions.setQuestionAnswer(answer))

    if (quiz.questionId < quiz.questions.length) {
      setTimeout(() => quiz.dispatch(quiz.actions.setNextQuestion()), 300)
    } else {
      setTimeout(() => quiz.dispatch(quiz.actions.setResult()), 300)
    }
  }
}

export default App
