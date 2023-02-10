import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import Component from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=XGok4UIqu8E'>
      video
    </a>
  </>
)

const meta = {
  title: 'Design/Neumorphism Loader',
  component: Component,
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      background: '#edf1f4',
      minHeight: `100vh`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    withTopLabel(label),
  ],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = {}
