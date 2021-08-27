import React from 'react'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import Component from '.'

export default {
  title: 'Framer Motion/Underline',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const first = () => <Component />
