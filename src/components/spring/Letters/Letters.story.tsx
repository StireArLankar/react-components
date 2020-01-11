import React from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

// import { Jump, JumpProps } from './Jump'
import { Jump } from './Jump'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { Roll } from './Roll'

export default {
  title: 'Spring|Letters',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      flexDirection: 'column',
      minHeight: '100vh',
      justifyContent: 'space-around',
    }),
  ],
}

export const jump = () => <Jump>Hello world</Jump>

export const roll = () => <Roll>Hello world</Roll>
