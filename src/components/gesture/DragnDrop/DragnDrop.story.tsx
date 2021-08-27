import React, { Fragment } from 'react'

import { themeColors } from 'theme/theme.styles'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'
import { withTopLabel } from '_storybook/withTopLabel'

import { DragnDrop } from '.'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://github.com/react-spring/react-use-gesture'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
      docs
    </a>
  </Fragment>
)

export default {
  title: 'Gesture/DragnDrop',
  decorators: [
    withCenteredStyle({
      width: '100vw',
      backgroundColor: '#f7f7f7',
      position: 'fixed',
      minHeight: '100vh',
      padding: 50,
    }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const dragnDrop = () => <DragnDrop />
