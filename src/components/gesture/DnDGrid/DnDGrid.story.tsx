import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'

import { DnDGrid } from '.'
import { StatefulDnDGrid } from './StatefulDnDGrid'
import { FilledDnDGrid } from './FilledDnDGrid'

export default {
  title: 'Gesture|DnDGrid',
  decorators: [
    withCenteredStyle({
      width: '100vw',
      backgroundColor: '#f7f7f7',
      height: '100vh',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
    }),
    withCustomTheme,
  ],
}

export const dndGrid = () => <DnDGrid />
export const sattefulDndGrid = () => <StatefulDnDGrid />
export const filledDndGrid = () => <FilledDnDGrid />
