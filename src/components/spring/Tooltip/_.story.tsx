import { radios } from '@storybook/addon-knobs'

import { Test } from './Test'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Tooltip',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const popup = () => (
  <Test
    position={radios('position', { top: 'top', bottom: 'bottom' }, 'top')}
  />
)
