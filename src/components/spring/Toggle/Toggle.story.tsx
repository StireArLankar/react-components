import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Toggle } from '.'

export default {
  title: 'Spring|Toggle',
  decorators: [withCenteredStyle({ width: 600 }), withCustomTheme],
}

export const toggle = () => <Toggle />
