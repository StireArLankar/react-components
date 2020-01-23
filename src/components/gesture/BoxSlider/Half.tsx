import React, { useEffect } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useStyles from './useStyles'
import imgs from './imgs'

const STEP = 100

const rotate = (num: number) =>
  `translateZ(-200px) rotateY(${-90 + (num * 180) / STEP}deg )`

const int2 = (x: number, step: number, count: number, i: number) => {
  const start = x % (step * count)

  let down = start - step * i
  if (start > 0) {
    return Math.max(Math.min(down, step), 0)
  } else {
    const offset = step * count
    down += offset
    return Math.min(Math.max(down, 0), step)
  }
}

export const HalfSlider = () => {
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
