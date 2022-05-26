import React from 'react'

import Component from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { themeColors } from '~/theme/theme.styles'

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
