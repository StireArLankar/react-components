import React from 'react'

import { Toggle } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Toggle',
  decorators: [withCenteredStyle({ width: 600 }), withCustomTheme],
}

export const toggle = () => <Toggle />
