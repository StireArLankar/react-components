import { useRef } from 'react'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'
import { BoxSliderProps } from './_types'
import imgs from './imgs'

export const BoxSliderInertial = (props: BoxSliderProps) => {
  const { rotate, int, start = 0 } = props

  const [{ x }, spring] = useSpring(() => ({
    x: start,
    config: { mass: 5, tension: 170, friction: 80 },
  }))

  // Ref for memoizing value between drags
  const dragOffset = useRef(start)

  const bind = useDrag(
    ({ movement: [x], down, velocity: [vx] }) => {
      if (down) {
        spring.start({ x: dragOffset.current + x })
      } else {
        dragOffset.current += x + vx * 200
        spring.start({ x: dragOffset.current })
      }
    },
    // FIXME
    { target: window }
  )

  // useEffect(() => {
  //   bind()
  // }, [bind])

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
