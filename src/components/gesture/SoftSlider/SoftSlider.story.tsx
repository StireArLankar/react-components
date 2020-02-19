import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Test } from './Test'

export default {
  title: 'Spring|Soft Slider',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const softSlider = () => <Test />
