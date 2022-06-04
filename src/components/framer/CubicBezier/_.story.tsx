import Component from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Framer Motion/Cubic Bezier',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const CubicBezier = () => <Component />
