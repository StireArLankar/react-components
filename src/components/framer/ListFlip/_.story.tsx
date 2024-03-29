import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from '.'

export default {
  title: 'Framer Motion/List Flip',
  component: Component,
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%', boxSizing: 'border-box' }),
  ],
}

export const Flip = {}
