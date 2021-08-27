import React from 'react'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'
import { themeColors } from 'theme/theme.styles'

import { SvgPath } from '.'

export default {
  title: 'Spring/SvgPath',
  decorators: [withCenteredStyle({ color: themeColors.text }), withCustomTheme],
}

export const svg = () => {
  return <SvgPath />
}
