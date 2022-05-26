import React from 'react'

import { Swipe } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Gesture/Swipe',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const swipe = () => <Swipe />
