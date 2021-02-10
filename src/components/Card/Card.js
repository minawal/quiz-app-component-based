import createElement from '../../lib/createElement'
import Button from '../Button'
import './Card.css'

export default function Card(question, answer) {
  const questionEl = createElement('h2', { innerText: question })
  const button = Button('Show answer')
  const answerEl = createElement('p', { hidden: true, innerText: answer })

  button.addEventListener('click', () => {
    answerEl.hidden = !answerEl.hidden
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    questionEl,
    button,
    answerEl
  )

  return el
}
