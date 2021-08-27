import React, { Fragment } from 'react'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { MultiCard } from '.'
import { withTopLabel } from '_storybook/withTopLabel'
import { themeColors } from 'theme/theme.styles'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://github.com/react-spring/react-use-gesture'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      docs
    </a>
  </Fragment>
)

export default {
  title: 'Gesture/MultiCard',
  decorators: [
    withCenteredStyle({ width: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const multiCard = () => <MultiCard />
