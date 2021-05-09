import React, { useEffect, useRef } from 'react'
import { useWheel } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import clsx from 'clsx'

import useStyles from './useStyles'
import imgs from './imgs'

const wheel = (x: number, width: number, count: number) => {
  const start = x % (width * count)
  const offset = -width * (x < 0 ? count + 1 : 1)
  return `translateX(${offset - start}px)`
}

export const HorizontalWheel = () => {
  const classes = useStyles()
  const [ref, { width }] = useMeasure()
  const [{ wheelY }, setWheel] = useSpring(() => ({ wheelY: 0 }))
  const bind = useWheel(({ offset: [, y] }) => {
    setWheel({ wheelY: y })
  })

  const ref2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (evt: any) => {
      if (evt.path.includes(ref2.current)) {
        evt.preventDefault()
      }
    }

    document.addEventListener('wheel', handler, { passive: false })
    return () => document.removeEventListener('wheel', handler)
  }, [])

  return (
    <div
      style={{
        height: '200vh',
        width: '100%',
        display: 'grid',
        overflow: 'auto',
        placeItems: 'center',
      }}
    >
      <div className={classes.wrapper} ref={ref2}>
        <animated.div
          {...bind()}
          ref={ref}
          className={clsx(classes.inner, classes.horizontal)}
          style={{
            transform: wheelY.to((val) => wheel(val, width, 5)),
          }}
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              className={classes.img}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </animated.div>
      </div>
    </div>
  )
}
