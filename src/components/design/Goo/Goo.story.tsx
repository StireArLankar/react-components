import React from 'react'

import { Temp } from './first'
import { Second } from './second'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Design/Goo',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const first = () => <Temp />
export const second = () => <Second />
