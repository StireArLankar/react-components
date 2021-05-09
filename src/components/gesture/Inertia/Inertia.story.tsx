import React from 'react'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'
import { withTopLabel } from '_storybook/withTopLabel'
import { themeColors } from 'theme/theme.styles'

import { Inertia } from './Inertia'

const label = (
  <>
    <span>Thx to </span>
    <a
      style={{ color: themeColors.orange, textDecoration: 'none' }}
      href='https://github.com/react-spring/react-use-gesture/issues/132'
    >
      demonstration
    </a>
  </>
)

export default {
  title: 'Gesture/Inertia',
  decorators: [
    withCenteredStyle({ width: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const inertia = () => <Inertia />
