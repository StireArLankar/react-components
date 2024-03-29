import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import { DragnDrop } from '.'

const label = (
  <>
    <span>Credits to </span>
    <a
      className={storyLink}
      href='https://github.com/react-spring/react-use-gesture'
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

export const _DragnDrop = () => <DragnDrop />
