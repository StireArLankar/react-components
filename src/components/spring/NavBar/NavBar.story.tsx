import React from 'react'

import { number } from '@storybook/addon-knobs'

import { NavBar, NavBarProps, NavBarItem } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

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
}
export const navBar = () => {
  const props: NavBarProps = {
    items,
    popoverWidth: Math.max(number('popoverWidth', 300), 0),
  }

  return <NavBar {...props} />
}
