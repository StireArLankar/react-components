import type { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import { LiquidButton } from './LiquidButton'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=wjHTKLstbRg'>
      video
    </a>
  </>
)

const meta = {
  title: 'Design/Liquid',
  component: LiquidButton,
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
} satisfies Meta<typeof LiquidButton>

export default meta

type Story = StoryObj<typeof meta>

export const Button: Story = {
  args: { children: 'Hello world' },
  argTypes: { children: { type: 'string' } },
}
