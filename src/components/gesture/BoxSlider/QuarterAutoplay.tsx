import React from 'react'

import { BoxSliderAutoplay } from './BoxSliderAutoplay'

import clamp from '~/utils/clamp'

const STEP = 100

// range: [-50, 150]
const rotate = (num: number) =>
  `translateZ(-200px) rotateY(${-45 + (num * 90) / STEP}deg )`

const int = (x: number, count: number, i: number) => {
  // Range of possible values
  // [0...max]
  const fullRange = STEP * count

  // Current x value bounded by full cycle
  // [0...val...max] or [-max...val...0]
  const boundedValue = x % fullRange

  // Needed for transforming negative value to positive
  // [-max...val...0] => [0...val...max]
  const offset = boundedValue > 0 ? 0 : fullRange
  const positiveValue = boundedValue + offset

  // Value normilized to [0...val...STEP] for each item
  const itemValue = positiveValue - STEP * i

  if (i === 0 && positiveValue > fullRange - STEP / 2) {
    // Make first item move like he is startig from STEP * -1/2 on big values
    return positiveValue - fullRange
  }

  if (i === count - 1 && positiveValue < STEP / 2) {
    // Make last item move like he is startig from STEP * 3/2 on low values
    return positiveValue + STEP
  }

  return clamp(itemValue, STEP * (-1 / 2), STEP * (3 / 2))
}

export const QuarterAutoplaySlider = () => (
  <BoxSliderAutoplay step={STEP} rotate={rotate} int={int} start={50} />
)
