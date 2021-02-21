import React from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { Heart } from './Heart'

export default {
  title: 'Design/Heart',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const heart = () => <Heart />
