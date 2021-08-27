import React from 'react'
import { withCustomTheme } from '_storybook/withCustomTheme'
import { withCenteredStyle } from '_storybook/withCenteredStyle'

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
