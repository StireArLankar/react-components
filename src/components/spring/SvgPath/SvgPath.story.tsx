import React from 'react'

import { themeColors } from 'theme/theme.styles'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { SvgPath } from '.'

export default {
  title: 'Spring/SvgPath',
  decorators: [withCenteredStyle({ color: themeColors.text }), withCustomTheme],
}

export const svg = () => {
  return <SvgPath />
}
