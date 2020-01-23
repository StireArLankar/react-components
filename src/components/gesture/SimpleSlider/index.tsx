import React, { useEffect } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useStyles from './useStyles'
import imgs from './imgs'

const STEP = 150

const rotate = (num: number) =>
  `translateZ(-200px) rotateY(${-90 + (num * 180) / STEP}deg )`

const int2 = (x: number, step: number, count: number, i: number) => {
  const start = x % (step * count)
  let down = start - step * i
  let upper = down - step
  if (start > 0) {
    if (down > 0 && upper < 0) {
      return down
    } else if (down > 0) {
      return step
    }
    return 0
  } else {
    const offset = step * count
    down += offset
    upper += offset

    if (upper < 0 && down > 0) {
      return upper + step
    } else if (upper < 0) {
      return 0
    }
    return step
  }
}

export const SimpleSlider = () => {
  const classes = useStyles()
  const [{ wheelY }, setWheel] = useSpring(() => ({ wheelY: 0 }))

  const bind = useDrag(
    ({ offset: [x], vxvy: [vx] }) => {
      setWheel({ wheelY: -x })
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
          transform: wheelY.interpolate((val) =>
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
        {wheelY.interpolate((val) =>
          int2(val, STEP, imgs.length, index).toFixed(0)
        )}
      </animated.p>
    ))

  return (
    <div className={classes.wrapper}>
      <ul className={classes.stage}>{renderImages()}</ul>
      <ul className={classes.values}>{renderValues()}</ul>
    </div>
  )
}
