import { ComponentMeta } from '@storybook/react'

import Temp from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

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
  component: Temp,
} as ComponentMeta<typeof ArcLoader>

export const ArcLoader = () => <Temp />
