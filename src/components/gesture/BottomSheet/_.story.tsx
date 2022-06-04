import BottomSheet from '.'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

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

export const smallContent = () => (
  <BottomSheet>
    <div>small content</div>
  </BottomSheet>
)

export const largeContent = () => (
  <BottomSheet>
    <div style={{ height: 1500 }}>large content</div>
  </BottomSheet>
)
