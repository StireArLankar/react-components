import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { ScrollBar as Component } from './ScrollBar'

const meta = {
  title: 'Gesture/ScrollBar',
  component: Component,
  decorators: [withCustomTheme, withCenteredStyle({})],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const ScrollBar: Story = {
  args: { itemsAmount: 5 },
}
