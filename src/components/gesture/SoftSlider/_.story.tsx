import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import { Test } from './Test'

const label = (
  <>
    <span>Credits to </span>
    <a
      className={storyLink}
      href='https://github.com/dbismut/react-soft-slider'
    >
      dbismut
    </a>
  </>
)

export default {
  title: 'Gesture/Soft Slider',
  decorators: [
    withCenteredStyle({ width: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const softSlider = () => <Test />
