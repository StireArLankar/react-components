import type { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from '.'

const meta = {
  title: 'Spring/Toggle',
  component: Component,
  decorators: [withCenteredStyle({ width: 600 }), withCustomTheme],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Toggle: Story = {}
