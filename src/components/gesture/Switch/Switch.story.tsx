import React from 'react'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { Switch } from './Switch'

export default {
  title: 'Gesture/Switch',
  decorators: [
    withCenteredStyle({
      width: '100%',
      overflow: 'hidden',
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
    }),
    withCustomTheme,
  ],
}

export const framerSwitch = () => <Switch />
