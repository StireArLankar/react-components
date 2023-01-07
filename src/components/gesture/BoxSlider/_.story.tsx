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

export const halfSlider = () => <HalfSlider />
export const quarterSlider = () => <QuarterSlider />
export const quarterSnapSlider = () => <QuarterSnapSlider />
export const quarterInertialSlider = () => <QuarterInertialSlider />
export const quarterAutoplaySlider = () => <QuarterAutoplaySlider />
