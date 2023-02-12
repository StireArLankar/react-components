import type { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from '.'

const meta = {
  title: 'Radix/ScrollArea',
  component: Component,
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      background: 'white',
      height: `50vh`,
      width: `50vw`,
      borderRadius: 5,
    }),
  ],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const ScrollArea: Story = {
  render: () => (
    <Component>
      <div style={{ height: '200vh', width: '200vw' }} />
    </Component>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Component>
      <div style={{ height: '200vh', width: '100%' }} />
    </Component>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Component>
      <div style={{ height: '100%', width: '200vw' }} />
    </Component>
  ),
}
