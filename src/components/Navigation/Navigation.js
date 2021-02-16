import createElement from '../../lib/createElement'
import homeSvg from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSvg from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSvg from '@fortawesome/fontawesome-free/svgs/solid/edit.svg'
import settingsSvg from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'
import './Navigation.css'

const buttonsConfig = [
  { text: 'Home', svgPath: homeSvg },
  { text: 'Bookmarks', svgPath: bookmarkSvg },
  { text: 'Create', svgPath: createSvg },
  { text: 'Settings', svgPath: settingsSvg },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: '' }),
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  return createElement('nav', { className: 'Navigation' }, ...buttons)
}

/*
  const [home, bookmarks, create, settings] = buttonsConfig
  const homeButton = createElement(
    'button',
    { className: 'Navigation__button' },
    createElement('img', { src: home.svgPath, alt: '' }),
    home.text
  )
  const bookmarksButton = createElement(
    'button',
    { className: 'Navigation__button' },
    createElement('img', { src: bookmarks.svgPath, alt: '' }),
    bookmarks.text
  )
  const createButton = createElement(
    'button',
    { className: 'Navigation__button' },
    createElement('img', { src: create.svgPath, alt: '' }),
    create.text
  )
  const settingsButton = createElement(
    'button',
    { className: 'Navigation__button' },
    createElement('img', { src: settings.svgPath, alt: '' }),
    settings.text
  )

  createButton.addEventListener('click', () => onNavigate(create.text))

  homeButton.addEventListener('click', () => onNavigate(home.text))

  const el = createElement(
    'nav',
    { className: 'Navigation' },
    homeButton,
    bookmarksButton,
    createButton,
    settingsButton
  )

  return el
} 

 */
