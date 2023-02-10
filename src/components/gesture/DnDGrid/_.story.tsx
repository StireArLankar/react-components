import { ComponentStory } from '@storybook/react'

import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { FilledDnDGrid } from './FilledDnDGrid'
import { SwapDnDGrid } from './FilledDnDGrid/SwapDnDGrid'
import { UnfilledDnDGrid } from './FilledDnDGrid/UnfilledDnDGrid'
import { StatefulDnDGrid } from './StatefulDnDGrid'

import { DnDGrid } from '.'

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

export const _DndGrid = () => <DnDGrid />
export const _StatefulDndGrid = () => <StatefulDnDGrid />
export const _FilledLazyDndGrid = () => <FilledDnDGrid lazy />
export const _FilledDndGrid = () => <FilledDnDGrid />

const Template: ComponentStory<typeof UnfilledDnDGrid> = (props) => (
  <UnfilledDnDGrid {...props} />
)
export const _UnfilledDndGrid = Template.bind({})
_UnfilledDndGrid.args = {
  full: false,
  lazy: false,
}

const Template1: ComponentStory<typeof SwapDnDGrid> = (props) => (
  <SwapDnDGrid {...props} />
)
export const _SwapDndGrid = Template1.bind({})
_SwapDndGrid.args = {
  full: false,
  lazy: false,
}
