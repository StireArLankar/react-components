//@ts-nocheck
import React from 'react'
import { useDrag } from 'react-use-gesture'
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

export const HorizontalDrag = () => {
  const classes = useStyles()
  const [ref, { width }] = useMeasure()
  const [{ wheelY }, setWheel] = useSpring(() => ({ wheelY: 0 }))

  const bind = useDrag(({ offset: [x], vxvy: [vx] }) => {
    setWheel({ wheelY: -x })
  })

  return (
    <div className={classes.wrapper} {...bind()}>
      <animated.div
        ref={ref}
        className={clsx(classes.inner, classes.horizontal)}
        style={{
          transform: wheelY.interpolate((val) => wheel(val, width, 5)),
        }}
      >
        {imgs.map((img, i) => (
          <div
            key={i}
            className={classes.img}
            style={{ backgroundImage: `url(${img})` }}
          >
            <button
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                display: 'block',
                background: 'grey',
                transform: 'translate(-50%, -50%)',
                fontSize: '16px',
              }}
              onMouseDown={(evt) => {
                evt.stopPropagation()
              }}
            >
              Hello
            </button>
          </div>
        ))}
      </animated.div>
    </div>
  )
}
