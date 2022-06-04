import { ComponentMeta } from '@storybook/react'

import { Cancel } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Gesture/Cancel',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
  component: Cancel,
} as ComponentMeta<typeof Cancel>

export const cancel = () => <Cancel />
