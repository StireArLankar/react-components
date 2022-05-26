import React from 'react'

import { Wheel } from './Wheel'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Gesture/Wheel',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const wheel = () => <Wheel />
