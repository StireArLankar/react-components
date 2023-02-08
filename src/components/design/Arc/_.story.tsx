import type { Meta } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import Temp from '.'

const label = (
  <>
    <span>Credits to </span>
    <a className={storyLink} href='https://www.youtube.com/watch?v=UKS03yRWYgY'>
      video
    </a>
  </>
)

export default {
  title: 'Design/Arc Loader',
  component: Temp,
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
} satisfies Meta<typeof Temp>

export const ArcLoader = {}
