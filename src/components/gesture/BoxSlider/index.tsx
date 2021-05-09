import React, { useEffect } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'

import useStyles from './useStyles'
import imgs from './imgs'

export interface BoxSliderProps {
  rotate: (num: number) => string
  int: (x: number, count: number, i: number) => number
  // For consistence with more complex variants
  step?: number
  start?: number
}

export const BoxSlider = (props: BoxSliderProps) => {
  const { rotate, int } = props

  const classes = useStyles()
  const [{ x }, setX] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(
    ({ offset: [x] }) => {
      setX({ x })
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
          transform: x.to((val) =>
            //@ts-ignore
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
