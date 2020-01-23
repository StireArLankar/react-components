import React, { useEffect } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useStyles from './useStyles'
import imgs from './imgs'

const STEP = 100

const rotate = (num: number) =>
  `translateZ(-200px) rotateY(${-45 + (num * 90) / STEP}deg )`

const int2 = (x: number, step: number, count: number, i: number) => {
  const start = x % (step * count)

  let down = start - step * i
  if (start > 0) {
    if (i === 0 && start > step * count - step / 2) {
      return start - step * count
    }

    if (i === count - 1 && start < step / 2) {
      return start + step
    }

    return Math.max(Math.min(down, step + step / 2), -step / 2)
  } else {
    if (i === count - 1 && Math.abs(start) > step * count - step / 2) {
      return start + step * count + step
    }

    if (i === 0 && Math.abs(start) < step / 2) {
      return start
    }

    const offset = step * count
    down += offset
    return Math.min(Math.max(down, -step / 2), step + step / 2)
  }
}

export const QuarterSlider = () => {
  const classes = useStyles()
  const [{ x }, setWheel] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(
    ({ offset: [x] }) => {
      setWheel({ x })
    },
    { domTarget: window }
  )

  useEffect(() => {
    bind()
  }, [bind])

  const renderImages = () =>
    imgs.map((img, index) => (
      <animated.li
        className={classes.container}
        style={{
          transform: x.interpolate((val) =>
            rotate(int2(val, STEP, imgs.length, index))
          ),
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
        {x.interpolate((val) => int2(val, STEP, imgs.length, index).toFixed(0))}
      </animated.p>
    ))

  return (
    <div className={classes.wrapper}>
      <ul className={classes.stage}>{renderImages()}</ul>
      <ul className={classes.values}>{renderValues()}</ul>
    </div>
  )
}
