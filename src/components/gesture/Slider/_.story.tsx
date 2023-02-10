import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { HorizontalDrag } from './HorizontalDrag'
import { HorizontalDragSnap } from './HorizontalDragSnap'
import { HorizontalWheel } from './HorizontalWheel'
import { VerticalWheel } from './VerticalWheel'

export default {
  title: 'Gesture/Slider',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const _VerticalWheel = () => <VerticalWheel />
export const _HorizontalWheel = () => <HorizontalWheel />
export const _HorizontalDrag = () => <HorizontalDrag />
export const _HorizontalDragWithSnap = () => <HorizontalDragSnap />
