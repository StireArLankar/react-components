import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'
import { BoxSliderProps } from './_types'
import imgs from './imgs'

export const BoxSlider = (props: BoxSliderProps) => {
  const { rotate, int } = props

  const [{ x }, spring] = useSpring(() => ({ x: 0 }))

  useDrag(({ offset: [x] }) => void spring.start({ x }), { target: window })

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
