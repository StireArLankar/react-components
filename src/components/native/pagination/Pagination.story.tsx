import React from 'react'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

export default {
  title: 'Native/Pagination',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20 }),
    withCustomTheme,
  ],
}

export const example = () => (
  <div style={{ color: 'white', fontSize: 30 }}>BROKEN IN STORYBOOK</div>
)
