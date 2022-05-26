import React from 'react'

import { Virtualized } from './Virtualized'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Gesture/Virtualized',
  decorators: [
    withCenteredStyle({ width: '100%', overflow: 'hidden' }),
    withCustomTheme,
  ],
}

export const virtualizedSlider = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gridRowGap: 20,
      padding: 20,
    }}
  >
    <Virtualized />
    <Virtualized isVirt />
  </div>
)
