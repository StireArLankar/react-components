import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Temp } from './first'
import { Second } from './second'

export default {
  title: 'Design/Goo',
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
}

export const First = () => <Temp />
export const _Second = () => <Second />
