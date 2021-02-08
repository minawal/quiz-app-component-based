import createElement from '../lib/createElement'
import './Header.css'

export default function Header() {
  const el = createElement('header', {
    className: 'Header',
    innerHTML: `
  <h1 class="Header__title">
    Quiz App
    <span class="Header__subtitle">May the best win!</span>
  </h1>
  `,
  })

  return el
}
