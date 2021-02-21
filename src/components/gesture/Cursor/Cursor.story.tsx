import React, { Fragment } from 'react'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Cursor } from '.'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withTopLabel } from '../../../_storybook/withTopLabel'
import { themeColors } from '../../../theme/theme.styles'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=TpwpAYi-p2w'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      video
    </a>
  </Fragment>
)

export default {
  title: 'Gesture/Cursor',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
}

export const cursor = () => <Cursor />
