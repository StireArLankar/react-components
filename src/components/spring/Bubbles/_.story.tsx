import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Bubbles } from '.'

export default {
  title: 'Spring/Bubbles',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const _Bubbles = () => <Bubbles />
