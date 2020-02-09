import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { ChainedGrid } from './ChainedGrid'

export default {
  title: 'Gesture|ChainedDnDGrid',
  decorators: [
    withCenteredStyle({
      width: '100vw',
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      background: '#32394e',
    }),
    withCustomTheme,
  ],
}

export const chainedGrid = () => <ChainedGrid />

export const heroChainedGrid = () => <ChainedGrid isCrazy />
