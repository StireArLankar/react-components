import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { Rubber } from './Rubber'
import { Blob } from './Blob'
import { Inner } from './Inner'

export default {
  title: 'Gesture|Rubber',
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

export const rubber = () => <Rubber />
export const blob = () => <Blob />
export const inner = () => <Inner />
export const innerBump = () => <Inner bump />
