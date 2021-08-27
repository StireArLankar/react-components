import React from 'react'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { LenseContainer } from '.'

export default {
  title: 'Native/Lense',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20, flexDirection: 'column' }),
    withCustomTheme,
  ],
}

export const example = () => <LenseContainer />
