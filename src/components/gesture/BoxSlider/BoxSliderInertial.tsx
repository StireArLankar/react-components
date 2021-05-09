import React, { useEffect, useRef } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'

import useStyles from './useStyles'
import imgs from './imgs'

export interface BoxSliderSnapProps {
  rotate: (num: number) => string
  int: (x: number, count: number, i: number) => number
  step?: number
  start?: number
}

export const BoxSliderInertial = (props: BoxSliderSnapProps) => {
  const { rotate, int, start = 0 } = props

  const classes = useStyles()
  const [{ x }, setX] = useSpring(() => ({
    x: start,
    config: { mass: 5, tension: 170, friction: 80 },
  }))

  // Ref for memoizing value between drags
  const dragOffset = useRef(start)

  const bind = useDrag(
    ({ movement: [x], down, vxvy: [vx] }) => {
      if (down) {
        setX({
          x: dragOffset.current + x,
        })
      } else {
        dragOffset.current += x + vx * 200
        setX({
          x: dragOffset.current,
        })
      }
    },
    { domTarget: window }
  )

  useEffect(() => {
    bind()
  }, [bind])

  const renderImages = () =>
    imgs.map((img, index) => (
      <animated.li
        key={index}
        className={classes.container}
        style={{
          transform: x.to((val) => rotate(int(val, imgs.length, index))),
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
        {/* @ts-ignore */}
        {x.to((val) => int(val, imgs.length, index).toFixed(0))}
      </animated.p>
    ))

  return (
    <div className={classes.wrapper}>
      <ul className={classes.stage}>{renderImages()}</ul>
      <ul className={classes.values}>{renderValues()}</ul>
    </div>
  )
}
