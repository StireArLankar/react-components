import { Jump } from './Jump'
import { Roll } from './Roll'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Letters',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100vw',
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: '100vh',
      justifyContent: 'space-around',
    }),
  ],
}

export const jump = () => <Jump>Hello world</Jump>

export const roll = () => <Roll>Hello world</Roll>
