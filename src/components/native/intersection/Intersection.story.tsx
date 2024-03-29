import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Intersection } from '.'

export default {
  title: 'Native/Intersection',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20 }),
    withCustomTheme,
  ],
}

export const Example = () => <Intersection />
