import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Temp } from './Modal'

export default {
  title: 'Spring/Modal',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const modal = () => <Temp />
