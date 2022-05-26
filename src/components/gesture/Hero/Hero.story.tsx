import React from 'react'

import { Hero } from './Hero'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'

const label = <span>Click to expand, double-click to shrink</span>

export default {
  title: 'Gesture/Hero',
  decorators: [
    withCenteredStyle({ width: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const hero = () => <Hero />
