import React from 'react'

import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { DnDSorting } from '.'

export default {
  title: 'Native/DnD Sorting',
  decorators: [
    withCenteredStyle({ width: '100%', padding: 20 }),
    withCustomTheme,
  ],
}

export const example = () => <DnDSorting />
