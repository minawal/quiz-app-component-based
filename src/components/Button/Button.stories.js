import Button from '.'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('Hello')
export const longText = () => Button('Hello world, this is a long Text')
