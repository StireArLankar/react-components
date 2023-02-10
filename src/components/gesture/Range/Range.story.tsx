import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'
import { withTopLabel } from '~/_storybook/withTopLabel'
import { storyLink } from '~/theme/theme.css'

import { Range } from './Range'
import { RangeSimple } from './RangeSimple'

const label = (
  <>
    <span>Credits to </span>
    <a
      className={storyLink}
      href='https://spectrum.chat/react-spring/general/is-it-possible-to-initiate-dragging-from-a-different-component~88af3c28-0ee7-4e92-9015-df9a61552d07'
    >
      issue
    </a>
  </>
)

export default {
  title: 'Gesture/Range',
  decorators: [
    withCenteredStyle({ width: '100%', height: '100%' }),
    withCustomTheme,
    withTopLabel(label),
  ],
}

export const _Range = () => <Range />
export const _RangeSimle = () => <RangeSimple />
