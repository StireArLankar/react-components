import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from '.'

export default {
  title: 'Spring/Cubic Bezier',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const CubicBezier = () => <Component />
