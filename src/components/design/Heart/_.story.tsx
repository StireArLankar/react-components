import React from 'react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Heart } from './Heart'

export default {
  title: 'Design/Heart',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const heart = () => <Heart />
