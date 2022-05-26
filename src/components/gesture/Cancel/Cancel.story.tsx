import React from 'react'

import { Cancel } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Gesture/Cancel',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const cancel = () => <Cancel />
