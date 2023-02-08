import { ComponentStory, ComponentMeta } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { NavBar, NavBarItem } from '.'

const items: NavBarItem[] = [
  {
    title: 'Hello',
    content: <div style={{ height: 300, backgroundColor: 'green' }} />,
  },
  {
    title: 'World',
    content: <div style={{ height: 200, backgroundColor: 'orange' }} />,
  },
  {
    title: 'Omg',
    content: <div style={{ height: 100, backgroundColor: 'red' }} />,
  },
  {
    title: 'There',
    content: <div style={{ height: 150, backgroundColor: 'blue' }} />,
  },
  {
    title: 'Hi',
    content: <div style={{ height: 250, backgroundColor: 'teal' }} />,
  },
]

export default {
  title: 'Spring/NavBar with menu',
  decorators: [
    withCenteredStyle({
      width: 'auto',
      minWidth: 1000,
      minHeight: '80vh',
      alignItems: 'flex-start',
    }),
    withCustomTheme,
  ],
} as ComponentMeta<typeof NavBar>

const Template1: ComponentStory<typeof NavBar> = (props) => (
  <NavBar {...props} />
)

export const _NavBar = Template1.bind({})
_NavBar.argTypes = {
  popoverWidth: { control: { type: 'number', min: 0, step: 1 } },
}
_NavBar.args = { popoverWidth: 300, items }
_NavBar.parameters = { controls: { include: ['popoverWidth'] } }
