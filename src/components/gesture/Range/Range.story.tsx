import React, { Fragment } from 'react'
import { themeColors } from 'theme/theme.styles'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'
import { withTopLabel } from '_storybook/withTopLabel'

import { Range } from './Range'
import { RangeSimple } from './RangeSimple'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://spectrum.chat/react-spring/general/is-it-possible-to-initiate-dragging-from-a-different-component~88af3c28-0ee7-4e92-9015-df9a61552d07'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
      issue
    </a>
  </Fragment>
)

export default {
  title: 'Gesture/Range',
  decorators: [
    withCenteredStyle({ width: '100%', height: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const range = () => <Range />
export const rangeSimle = () => <RangeSimple />
