import React from 'react'

import { Heart } from './Heart'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Design/Heart',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const heart = () => <Heart />
