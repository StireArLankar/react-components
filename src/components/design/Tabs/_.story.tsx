import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import Component from '.'

const meta = {
  title: 'Design/Tabs',
  component: Component,
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: 'black',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Tabs: Story = {}
