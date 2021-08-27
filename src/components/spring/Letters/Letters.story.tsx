import React from 'react'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { Jump } from './Jump'
import { Roll } from './Roll'

export default {
  title: 'Spring/Letters',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100vw',
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: '100vh',
      justifyContent: 'space-around',
    }),
  ],
}

export const jump = () => <Jump>Hello world</Jump>

export const roll = () => <Roll>Hello world</Roll>
