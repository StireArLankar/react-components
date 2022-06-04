import Component from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Framer Motion/List Flip',
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%', boxSizing: 'border-box' }),
  ],
}

export const flip = () => <Component />
