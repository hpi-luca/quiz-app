import React from "react"
import ReactDOM from "react-dom"
import "./assets/styles/main.css"
import App from "./App"

import { QuizProvider } from "./store"

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
