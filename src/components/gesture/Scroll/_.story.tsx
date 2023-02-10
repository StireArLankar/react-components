import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { ScrollInner } from './ScrollInner'

import { Scroll } from '.'

export default {
  title: 'Gesture/Scroll',
  decorators: [withCustomTheme],
}

export const _Scroll = () => <Scroll />
_Scroll.decorators = [withCenteredStyle({ width: '100%', minHeight: '200vh' })]

export const _InnerScroll = () => <ScrollInner />
_InnerScroll.decorators = [
  withCenteredStyle({ width: '100%', position: 'absolute', top: 0, left: 0 }),
]
