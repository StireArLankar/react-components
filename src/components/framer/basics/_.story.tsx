import { withCenteredStyle } from '~/_storybook/withCenteredStyle'
import { withCustomTheme } from '~/_storybook/withCustomTheme'

import { Animation, AnimationV2 } from './Animation'
import { AnimationHelpers, AnimationHelpersVariants } from './AnimationHelpers'
import { AutoSizeWrapper } from './Autosize'
import { StaggerVariants } from './ComplexVariants'
import { Cycle } from './Cycle'
import { Damping } from './Damping'
import {
  Drag,
  DragAxis,
  DragElastic,
  DragNoMomentum,
  DragControls,
} from './Drag'
import { DragPropagation, DragRefConstrains } from './DragPropagation'
import { Keyframes } from './Keyframes'
import { MotionValue } from './MotionValue'
import { OrderTransition } from './OrderTransition'
import { PositionTransition } from './PositionTransition'
import { Variants, NestedVariants } from './Variants'

export default {
  title: 'Framer Motion/Basics',
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

export const _Animation = () => <Animation />
export const _AnimationV2 = () => <AnimationV2 />
export const _Damping = () => <Damping />
export const _Keyframes = () => <Keyframes />
export const _AutoSize = () => <AutoSizeWrapper />
export const _PositionTransition = () => <PositionTransition />
export const _OrderTransition = () => <OrderTransition />
export const _Variants = () => <Variants />
export const _NestedVariants = () => <NestedVariants />
export const _StaggerVariants = () => <StaggerVariants />
export const _AnimationHelpers = () => <AnimationHelpers />
export const _AnimationHelpersVariants = () => <AnimationHelpersVariants />
export const _Drag = () => <Drag />
export const _DragAxis = () => <DragAxis />
export const _DragElastic = () => <DragElastic />
export const _DragNoMomentum = () => <DragNoMomentum />
export const _DragControls = () => <DragControls />
export const _DragPropagation = () => <DragPropagation />
export const _DragRefConstrains = () => <DragRefConstrains />
export const _Cycle = () => <Cycle />
export const _MotionValue = () => <MotionValue />
