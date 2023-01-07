import { ComponentMeta } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Cancel } from '.'

export default {
  title: 'Gesture/Cancel',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
  component: Cancel,
} as ComponentMeta<typeof Cancel>

export const cancel = () => <Cancel />
