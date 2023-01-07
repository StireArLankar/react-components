import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import { MultiCard } from '.'

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
  title: 'Gesture/MultiCard',
  decorators: [
    withCenteredStyle({ width: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const multiCard = () => <MultiCard />
