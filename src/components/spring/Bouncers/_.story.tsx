import { Meta, StoryObj } from '@storybook/react'

import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from '.'

const meta = {
  title: 'Spring/Bouncers',
  component: Component,
  decorators: [withCustomTheme],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Bouncers: Story = {}
