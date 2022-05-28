import { ComponentMeta } from '@storybook/react'

import Temp from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Design/BoxPointer',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'teal',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
} as ComponentMeta<typeof BoxPointer>

export const BoxPointer = () => <Temp />
