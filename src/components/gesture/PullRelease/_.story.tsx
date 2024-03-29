import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { PullRelease } from '.'

export default {
  title: 'Gesture/PullRelease',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const _PullRelease = () => <PullRelease />
