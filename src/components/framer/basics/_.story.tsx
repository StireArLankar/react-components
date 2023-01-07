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

export const animation = () => <Animation />
export const animationV2 = () => <AnimationV2 />
export const damping = () => <Damping />
export const keyframes = () => <Keyframes />
export const autoSize = () => <AutoSizeWrapper />
export const positionTransition = () => <PositionTransition />
export const orderTransition = () => <OrderTransition />
export const variants = () => <Variants />
export const nestedVariants = () => <NestedVariants />
export const staggerVariants = () => <StaggerVariants />
export const animationHelpers = () => <AnimationHelpers />
export const animationHelpersVariants = () => <AnimationHelpersVariants />
export const drag = () => <Drag />
export const dragAxis = () => <DragAxis />
export const dragElastic = () => <DragElastic />
export const dragNoMomentum = () => <DragNoMomentum />
export const dragControls = () => <DragControls />
export const dragPropagation = () => <DragPropagation />
export const dragRefConstrains = () => <DragRefConstrains />
export const cycle = () => <Cycle />
export const motionValue = () => <MotionValue />
