import React from 'react'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { Temp } from './first'
import { Second } from './second'

export default {
  title: 'Design/Goo',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const first = () => <Temp />
export const second = () => <Second />
