import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import Calendar from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=9ySmMd5Cjc0'>
      video
    </a>
  </>
)

const meta: Meta<typeof Calendar> = {
  title: 'Design/Calendar',
  component: Calendar,
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      justifyItems: 'center',
      alignItems: 'flex-start',
      paddingTop: 60,
      display: 'grid',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }),
    withTopLabel(label),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const FramerMotion: Story = {}
