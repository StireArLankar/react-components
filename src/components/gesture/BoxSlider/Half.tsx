import clamp from '~/utils/clamp'

import { BoxSlider } from '.'

const STEP = 100

const rotate = (num: number) =>
  `translateZ(-200px) rotateY(${-90 + (num * 180) / STEP}deg )`

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

  return clamp(itemValue, 0, STEP)
}

export const HalfSlider = () => <BoxSlider rotate={rotate} int={int} step={0} />
