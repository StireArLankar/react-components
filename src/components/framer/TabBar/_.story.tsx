import React from 'react'
import { themeColors } from 'theme/theme.styles'

import { withCustomTheme } from '_storybook/withCustomTheme'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withTopLabel } from '_storybook/withTopLabel'

import Component from '.'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=QM3z4IEc4I0'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
      video
    </a>
  </>
)

export default {
  title: 'Framer Motion/TabBar',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
}

export const first = () => <Component />
