import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { SimpleSlider } from '.'

export default {
  title: 'Gesture|SimpleSlider',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const slider = () => <SimpleSlider />
