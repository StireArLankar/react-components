import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Cancel } from '.'

export default {
  title: 'Gesture/Cancel',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const cancel = () => <Cancel />
