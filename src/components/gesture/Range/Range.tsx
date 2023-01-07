import React, { useRef, useMemo, useEffect } from 'react'
import useMeasure from 'react-use-measure'

import { useSpring, animated, to } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import clamp from '~/utils/clamp'

import classes from './_classes.css'

export const Range = () => {
  const [{ x, s }, spring] = useSpring(() => ({ x: 0, s: 1 }))

  const draggingControl = useRef(false)

  const [scrubRef, { width, left }] = useMeasure({ debounce: 100 })

  const relativePosition = useRef(0)

  const limits = useMemo(() => [-width / 2, width / 2], [width])

  const setRelativePosition = (v: number) => {
    relativePosition.current = v / width
  }

  useEffect(() => {
    spring.start({ x: relativePosition.current * width })
  }, [spring, width])

  const bindControl = useDrag(
    ({ down, offset: [x] }) => {
      draggingControl.current = down
      spring.start({ x, s: down ? 1.4 : 1 })
      setRelativePosition(x)
    },
    {
      from: () => [x.get(), 0],
      bounds: { left: limits[0], right: limits[1] },
    }
  )

  const bind = useDrag(
    ({ last, xy: [px], movement: [mx], memo = px - left - width / 2 }) => {
      if (draggingControl.current || last) {
        return
      }
      const x = clamp(memo + mx, limits[0], limits[1])
      spring.start({ x })
      setRelativePosition(x)
      return memo
    }
  )

  return (
    <animated.div
      className={classes.wrapper}
      style={{
        color: x.to({ range: limits, output: ['#833ab4', '#fcb045'] }),
      }}
    >
      <div ref={scrubRef} className={classes.scrub} {...bind()}>
        <animated.div
          className={classes.control}
          {...bindControl()}
          style={{
            transform: to([x, s], (x, s) => `translateX(${x}px) scale(${s})`),
          }}
        />
      </div>
    </animated.div>
  )
}
