import React from 'react'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { Card } from '.'

export default {
  title: 'Spring/Card',
  decorators: [withCenteredStyle({ width: 200 }), withCustomTheme],
}

export const card = () => <Card />
