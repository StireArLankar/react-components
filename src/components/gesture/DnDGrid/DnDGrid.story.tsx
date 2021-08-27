import React from 'react'
import { withCenteredStyle } from '_storybook/withCenteredStyle'
import { withCustomTheme } from '_storybook/withCustomTheme'

import { DnDGrid } from '.'
import { StatefulDnDGrid } from './StatefulDnDGrid'
import { FilledDnDGrid } from './FilledDnDGrid'
import { UnfilledDnDGrid } from './FilledDnDGrid/UnfilledDnDGrid'
import { SwapDnDGrid } from './FilledDnDGrid/SwapDnDGrid'
import { boolean } from '@storybook/addon-knobs'

export default {
  title: 'Gesture/DnDGrid',
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

export const dndGrid = () => <DnDGrid />
export const statefulDndGrid = () => <StatefulDnDGrid />
export const filledLazyDndGrid = () => <FilledDnDGrid lazy />
export const filledDndGrid = () => <FilledDnDGrid />
export const unfilledDndGrid = () => (
  <UnfilledDnDGrid
    lazy={boolean('lazy', false)}
    full={boolean('full', false)}
  />
)
export const swapDndGrid = () => (
  <SwapDnDGrid lazy={boolean('lazy', false)} full={boolean('full', false)} />
)
