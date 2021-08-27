import React from 'react'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { HorizontalDrag } from './HorizontalDrag'
import { HorizontalDragSnap } from './HorizontalDragSnap'
import { HorizontalWheel } from './HorizontalWheel'
import { VerticalWheel } from './VerticalWheel'

export default {
  title: 'Gesture/Slider',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const verticalWheel = () => <VerticalWheel />
export const horizontalWheel = () => <HorizontalWheel />
export const horizontalDrag = () => <HorizontalDrag />
export const horizontalDragWithSnap = () => <HorizontalDragSnap />
