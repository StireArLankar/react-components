import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Scroll } from '.'
import { ScrollInner } from './ScrollInner'

export default {
  title: 'Gesture/Scroll',
  decorators: [withCustomTheme],
}

export const scroll = () => <Scroll />

scroll.story = {
  decorators: [withCenteredStyle({ width: '100%', minHeight: '200vh' })],
}

export const innerScroll = () => <ScrollInner />

innerScroll.story = {
  decorators: [
    withCenteredStyle({ width: '100%', position: 'absolute', top: 0, left: 0 }),
  ],
}
