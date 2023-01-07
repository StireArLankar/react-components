import { useRef, useMemo, useEffect } from 'react'
import useMeasure from 'react-use-measure'

import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import clamp from '~/utils/clamp'

import classes from './_classes.css'

export const RangeSimple = () => {
  const [style, spring] = useSpring(() => ({ x: 0, scale: 1 }))

  const [scrubRef, { width, left }] = useMeasure({ debounce: 100 })

  const relativePosition = useRef(0)

  const limits = useMemo(() => [-width / 2, width / 2], [width])

  const setRelativePosition = (v: number) =>
    (relativePosition.current = v / width)

  useEffect(() => {
    spring.start({ x: relativePosition.current * width })
  }, [spring, width])

  const bind = useDrag(
    ({ down, xy: [px], movement: [mx], memo = px - left - width / 2 }) => {
      const x = clamp(memo + mx, limits[0], limits[1])
      spring.start({ x, scale: down ? 1.4 : 1 })
      setRelativePosition(x)
      return memo
    }
  )

  return (
    <animated.div
      className={classes.wrapper}
      style={{
        color: style.x.to({
          range: limits,
          output: ['#833ab4', '#fcb045'],
        }),
      }}
    >
      <div ref={scrubRef} className={classes.scrub} {...bind()}>
        <animated.div className={classes.control} style={style} />
      </div>
    </animated.div>
  )
}
