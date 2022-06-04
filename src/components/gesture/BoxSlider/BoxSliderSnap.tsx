import { useRef } from 'react'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'
import { BoxSliderProps } from './_types'
import imgs from './imgs'

export const BoxSliderSnap = (props: BoxSliderProps) => {
  const { rotate, int, step, start = 0 } = props

  const [{ x }, setX] = useSpring(() => ({ x: start }))

  // Ref for memoizing value between drags
  const dragOffset = useRef(start)

  const bind = useDrag(
    ({ movement: [x], down }) => {
      if (down) {
        setX({ x: dragOffset.current + x })
      } else {
        const offset = x % step
        if (offset > step / 2) {
          // If remainder is more than half step,
          // then substract remainder and add step (rotate to next item)
          dragOffset.current += x - offset + step
        } else if (offset < -step / 2) {
          // If abs of remainder is more than half step and
          // its sign is negative, then substract remainder and
          // remove step (rotate to previous item)
          dragOffset.current += x - offset - step
        } else {
          // Else stay in current state (as its more valuable)
          // thru substracting remainder
          dragOffset.current += x - offset
        }
        setX({ x: dragOffset.current })
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
