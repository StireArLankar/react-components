import React from 'react'

import { Intersection } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Native/Intersection',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20 }),
    withCustomTheme,
  ],
}

export const example = () => <Intersection />
