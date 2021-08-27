import React from 'react'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import Temp from '.'

export default {
  title: 'Design/Wave Sinus Loader',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'black',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}

export const example = () => <Temp />
