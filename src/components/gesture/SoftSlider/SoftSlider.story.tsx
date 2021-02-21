import React, { Fragment } from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Test } from './Test'
import { themeColors } from '../../../theme/theme.styles'
import { withTopLabel } from '../../../_storybook/withTopLabel'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://github.com/dbismut/react-soft-slider'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
      dbismut
    </a>
  </Fragment>
)

export default {
  title: 'Gesture/Soft Slider',
  decorators: [
    withCenteredStyle({ width: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const softSlider = () => <Test />
