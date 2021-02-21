import React from 'react'

import { themeColors } from '../../../theme/theme.styles'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { withTopLabel } from '../../../_storybook/withTopLabel'

import Component from '.'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://www.react-spring.io'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      docs
    </a>
  </>
)

export default {
  title: 'Spring/Tree',
  decorators: [withCustomTheme, withTopLabel(label)],
}

export const tree = () => (
  <div
    style={{
      background: themeColors.dark,
      position: 'fixed',
      top: 0,
      left: 0,
      minWidth: '100vw',
      minHeight: '100vh',
      padding: 30,
    }}
  >
    <Component />
  </div>
)
