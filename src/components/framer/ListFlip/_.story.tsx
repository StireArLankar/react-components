import React from 'react'

import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'

import Component from '.'

export default {
  title: 'Framer Motion/List Flip',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%', boxSizing: 'border-box' }),
  ],
}

export const flip = () => <Component />
