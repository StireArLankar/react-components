import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import BottomSheet from '.'

export default {
  title: 'Gesture/BottomSheet',
  decorators: [
    withCenteredStyle({
      width: '100%',
      overflow: 'hidden',
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
    }),
    withCustomTheme,
  ],
}

export const SmallContent = () => (
  <BottomSheet>
    <div>small content</div>
  </BottomSheet>
)

export const LargeContent = () => (
  <BottomSheet>
    <div style={{ height: 1500 }}>large content</div>
  </BottomSheet>
)
