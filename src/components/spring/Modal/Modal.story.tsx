import React from 'react'

import { Temp } from './Modal'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

export default {
  title: 'Spring/Modal',
  decorators: [withCenteredStyle({ width: '100%' }), withCustomTheme],
}

export const modal = () => <Temp />
