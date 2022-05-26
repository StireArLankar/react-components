import React from 'react'

import { PullRelease } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Gesture/PullRelease',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const pullRelease = () => <PullRelease />
