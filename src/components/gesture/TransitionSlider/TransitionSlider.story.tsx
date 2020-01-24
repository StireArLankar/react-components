import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { SimpleSlider } from './Simple'

export default {
  title: 'Gesture|Transition Slider',
  decorators: [
    withCenteredStyle({ width: '100%', overflow: 'hidden' }),
    withCustomTheme,
  ],
}

export const simpleSlider = () => <SimpleSlider />
