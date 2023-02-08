import type { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from '.'

const meta = {
  title: 'Framer Motion/Cubic Bezier',
  component: Component,
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const CubicBezier: Story = {}
