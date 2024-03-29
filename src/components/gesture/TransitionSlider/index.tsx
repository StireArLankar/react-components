import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import clamp from '~/utils/clamp'

import classes from './_classes.css'
import imgs from './imgs'

const STEP = 100

const transform = (num: number) =>
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

export const TransitionSlider = () => {
  // const { transform, int } = props

  const [{ x }, spring] = useSpring(() => ({ x: 0 }))

  // const bind = useDrag(
  useDrag(
    ({ offset: [x] }) => {
      spring.start({ x })
    },
    // FIXME
    { target: window, axis: 'x' }
  )

  // useEffect(() => {
  //   bind()
  // }, [bind])

  const renderImages = () =>
    imgs.map((img, index) => (
      <animated.li
        className={classes.container}
        style={{
          transform: x.to((val) => transform(int(val, imgs.length, index))),
        }}
      >
        <animated.div
          className={classes.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      </animated.li>
    ))

  const renderValues = () =>
    imgs.map((_, index) => (
      <animated.p className={classes.value}>
        {x.to((val) => int(val, imgs.length, index).toFixed(0))}
      </animated.p>
    ))

  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>{renderImages()}</ul>
      <ul className={classes.values}>{renderValues()}</ul>
    </div>
  )
}
