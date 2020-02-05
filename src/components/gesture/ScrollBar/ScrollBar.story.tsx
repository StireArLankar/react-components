import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { ScrollBar } from './ScrollBar'

export default {
  title: 'Gesture|ScrollBar',
  decorators: [withCustomTheme, withCenteredStyle({})],
}

export const scrollBar = () => <ScrollBar />

// innerScroll.story = {
//   decorators: [
//     withCenteredStyle({ width: '100%', position: 'absolute', top: 0, left: 0 }),
//   ],
// }
