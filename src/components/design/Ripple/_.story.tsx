import React, { Fragment } from 'react'

import { text, boolean } from '@storybook/addon-knobs'
import { themeColors } from 'theme/theme.styles'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'
import { withTopLabel } from '_storybook/withTopLabel'

import { Ripple, RippleProps } from '.'

const label = (
  <Fragment>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=ueyRcYEmsrI'
      style={{ color: themeColors.darkBlue, textDecoration: 'none' }}
    >
      video
    </a>
  </Fragment>
)

export default {
  title: 'Design/Ripple',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
}

export const button = () => {
  const props: RippleProps = {
    children: text('text', 'Hello world'),
    secondary: boolean('secondary', false),
  }

  return <Ripple {...props} />
}
