import React from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { Animation } from './Animation'

export default {
  title: 'Framer Motion|Basics',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}

export const animation = () => <Animation />
