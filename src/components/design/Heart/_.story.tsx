import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from './Heart'

const meta = {
  title: 'Design/Heart',
  component: Component,
  decorators: [withCustomTheme, withCenteredStyle({ width: '100%' })],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Heart: Story = {}
