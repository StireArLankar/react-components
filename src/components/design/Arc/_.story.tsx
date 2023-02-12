import type { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import Component from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=UKS03yRWYgY'>
      video
    </a>
  </>
)

const meta = {
  title: 'Design/Arc Loader',
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
    withTopLabel(label),
  ],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const ArcLoader: Story = {}
