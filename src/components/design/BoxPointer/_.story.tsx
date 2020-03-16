import React from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import Temp from '.'

export default {
  title: 'Design|BoxPointer',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'teal',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}

export const example = () => <Temp />
