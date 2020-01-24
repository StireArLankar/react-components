import React, { useEffect, useRef } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useStyles from './useStyles'
import imgs from './imgs'

export interface BoxSliderSnapProps {
  rotate: (num: number) => string
  int: (x: number, count: number, i: number) => number
  step: number
  start?: number
}

export const BoxSliderSnap = (props: BoxSliderSnapProps) => {
  const { rotate, int, step, start = 0 } = props

  const classes = useStyles()
  const [{ x }, setWheel] = useSpring(() => ({ x: start }))

  const dragOffset = useRef(start)

  const bind = useDrag(
    ({ movement: [x], down }) => {
      if (down) {
        setWheel({ x: dragOffset.current + x })
      } else {
        const offset = x % step
        if (offset > step / 2) {
          dragOffset.current += x - offset + step
        } else if (offset < -step / 2) {
          dragOffset.current += x - offset - step
        } else {
          dragOffset.current += x - offset
        }
        setWheel({ x: dragOffset.current })
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
        className={classes.container}
        style={{
          transform: x.interpolate((val) =>
            rotate(int(val, imgs.length, index))
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
        {x.interpolate((val) => int(val, imgs.length, index).toFixed(0))}
      </animated.p>
    ))

  return (
    <div className={classes.wrapper}>
      <ul className={classes.stage}>{renderImages()}</ul>
      <ul className={classes.values}>{renderValues()}</ul>
    </div>
  )
}
