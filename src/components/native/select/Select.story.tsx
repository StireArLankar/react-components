import React from 'react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Select } from '.'

export default {
  title: 'Native/Select',
  decorators: [
    withCenteredStyle({
      width: '100%',
      padding: 20,
      height: '100vh',
      alignItems: 'flex-start',
    }),
    withCustomTheme,
  ],
}

export const Example = () => <Select />
