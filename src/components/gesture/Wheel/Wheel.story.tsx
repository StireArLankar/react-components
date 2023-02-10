import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from './Wheel'

const meta = {
  title: 'Gesture/Wheel',
  component: Component,
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Wheel: Story = {}
