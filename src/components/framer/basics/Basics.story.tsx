import React from 'react'
import { withCenteredStyle } from '../../../_storybook/withCenteredStyle'
import { withCustomTheme } from '../../../_storybook/withCustomTheme'
import { Animation, AnimationV2 } from './Animation'
import { AutoSizeWrapper } from './Autosize'
import { Damping } from './Damping'
import { Keyframes } from './Keyframes'
import { PositionTransition } from './PositionTransition'
import { OrderTransition } from './OrderTransition'

export default {
  title: 'Framer Motion|Basics',
  decorators: [
    withCustomTheme,
    withCenteredStyle({
      width: '100%',
      minHeight: `100vh`,
      display: 'grid',
      placeItems: 'center',
    }),
  ],
}

export const animation = () => <Animation />
export const animationV2 = () => <AnimationV2 />
export const damping = () => <Damping />
export const keyframes = () => <Keyframes />
export const autoSize = () => <AutoSizeWrapper />
export const positionTransition = () => <PositionTransition />
export const orderTransition = () => <OrderTransition />
