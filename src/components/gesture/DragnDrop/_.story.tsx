import { DragnDrop } from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { themeColors } from '~/theme/theme.styles'

const label = (
  <>
    <span>Credits to </span>
    <a
      href='https://github.com/react-spring/react-use-gesture'
      style={{ color: themeColors.orange, textDecoration: 'none' }}
    >
      docs
    </a>
  </>
)

export default {
  title: 'Gesture/DragnDrop',
  decorators: [
    withCenteredStyle({
      width: '100vw',
      backgroundColor: '#f7f7f7',
      position: 'fixed',
      minHeight: '100vh',
      padding: 50,
    }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const dragnDrop = () => <DragnDrop />
