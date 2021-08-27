import React from 'react'
import { radios } from '@storybook/addon-knobs'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { Test } from './Test'

export default {
  title: 'Spring/Tooltip',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const popup = () => (
  <Test
    position={radios('position', { top: 'top', bottom: 'bottom' }, 'top')}
  />
)
