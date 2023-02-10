import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Blob } from './Blob'
import { Inner } from './Inner'
import { Rubber } from './Rubber'

export default {
  title: 'Gesture/Rubber',
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

export const _Rubber = () => <Rubber />
export const _Blob = () => <Blob />
export const _Inner = () => <Inner />
export const _InnerBump = () => <Inner bump />
