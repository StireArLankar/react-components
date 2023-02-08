import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from './Heart'

export default {
  title: 'Design/Heart',
  component: Component,
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const Heart = {}
