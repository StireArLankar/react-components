import { ComponentMeta } from '@storybook/react'

import Temp from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { themeColors } from '~/theme/theme.styles'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://www.youtube.com/watch?v=UKS03yRWYgY'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
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
