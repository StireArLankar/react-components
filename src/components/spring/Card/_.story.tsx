import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from '.'

const meta = {
  title: 'Spring/Card',
  component: Component,
  decorators: [withCenteredStyle({ width: 200 }), withCustomTheme],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Card: Story = {}
