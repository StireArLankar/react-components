import { ComponentMeta } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Wheel } from './Wheel'

export default {
  title: 'Gesture/Wheel',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
} as ComponentMeta<typeof Wheel>

export const wheel = () => <Wheel />
