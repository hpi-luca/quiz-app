import { Question } from "../store"

export function shuffleAnswers(questions: Question[]) {
  questions.forEach(({ answers }) => {
    let currentIndex = answers.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = answers[currentIndex]
      answers[currentIndex] = answers[randomIndex]
      answers[randomIndex] = temporaryValue
    }
  })

  return questions
}