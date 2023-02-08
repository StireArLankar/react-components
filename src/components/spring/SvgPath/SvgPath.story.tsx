import type { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { vars } from '~/theme/theme.css'

import Component from '.'

const meta = {
  title: 'Spring/SvgPath',
  component: Component,
  decorators: [withCenteredStyle({ color: vars.color.text }), withCustomTheme],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const SvgPath: Story = {}
