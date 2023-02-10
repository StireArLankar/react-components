import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { HalfSlider } from './Half'
import { QuarterSlider } from './Quarter'
import { QuarterAutoplaySlider } from './QuarterAutoplay'
import { QuarterInertialSlider } from './QuarterInertial'
import { QuarterSnapSlider } from './QuarterSnap'

export default {
  title: 'Gesture/BoxSlider',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const _HalfSlider = () => <HalfSlider />
export const _QuarterSlider = () => <QuarterSlider />
export const _QuarterSnapSlider = () => <QuarterSnapSlider />
export const _QuarterInertialSlider = () => <QuarterInertialSlider />
export const _QuarterAutoplaySlider = () => <QuarterAutoplaySlider />
