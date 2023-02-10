import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import Component from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=ueyRcYEmsrI'>
      video
    </a>
  </>
)

const meta = {
  title: 'Design/Ripple',
  component: Component,
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
  args: { children: 'Hello world' },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
  },
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Ripple: Story = {}
