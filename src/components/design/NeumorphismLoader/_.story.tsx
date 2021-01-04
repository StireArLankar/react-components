import React from 'react'

import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { withTopLabel } from '../../../_storybook/withTopLabel'
import { themeColors } from '../../../theme/theme.styles'

import Temp from '.'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=XGok4UIqu8E'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
      video
    </a>
  </>
)

export default {
  title: 'Design|Neumorphism Loader',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: '#edf1f4',
      minHeight: `100vh`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    withTopLabel(label),
  ],
}

export const example = () => <Temp />
