import React, { useRef, useMemo, useEffect } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import useMeasure from 'react-use-measure'

import clamp from 'lodash-es/clamp'

import useStyles from './Range.styles'

export const Range = () => {
  const classes = useStyles()

  const [{ x, s }, set] = useSpring(() => ({ x: 0, s: 1 }))

  const draggingControl = useRef(false)

  const [scrubRef, { width, left }] = useMeasure({ debounce: 100 })

  const relativePosition = useRef(0)

  const limits = useMemo(() => [-width / 2, width / 2], [width])

  const setRelativePosition = (v: number) => {
    relativePosition.current = v / width
  }

  useEffect(() => {
    set({ x: relativePosition.current * width })
  }, [set, width])

  const bindControl = useDrag(
    ({ down, movement: [x] }) => {
      draggingControl.current = down
      set({ x, s: down ? 1.4 : 1 })
      setRelativePosition(x)
    },
    {
      initial: () => [x.get(), 0],
      bounds: { left: limits[0], right: limits[1] },
    }
  )

  const bind = useDrag(
    ({ last, xy: [px], movement: [mx], memo = px - left - width / 2 }) => {
      if (draggingControl.current || last) {
        return
      }
      const x = clamp(memo + mx, limits[0], limits[1])
      set({ x })
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
            transform: interpolate(
              [x, s],
              (x, s) => `translateX(${x}px) scale(${s})`
            ),
          }}
        />
      </div>
    </animated.div>
  )
}
