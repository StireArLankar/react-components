import { Meta, StoryObj } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { CameraRounded } from '~/components/materialSvgs'
import { storyLink } from '~/theme/theme.css'

import { Icon } from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=YRp8kSUZiss'>
      video
    </a>
  </>
)

const meta = {
  title: 'Design/Icons',
  component: Icon,
  decorators: [
    withCustomTheme,
    withCenteredStyle({ width: '100%' }),
    withTopLabel(label),
  ],
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Icons: Story = {
  args: { Icon: CameraRounded },
}
