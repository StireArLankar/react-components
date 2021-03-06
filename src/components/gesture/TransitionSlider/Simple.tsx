import React, { useState } from 'react'
import clsx from 'clsx'
import { useDrag } from 'react-use-gesture'
import { animated, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import useStyles from './useStyles'
import imgs from './imgs'

const WIDTH = 200

export const SimpleSlider = () => {
  const classes = useStyles()
  const [{ x }, setX] = useSpring(() => ({ x: 0 }))

  const [value, setValue] = useState(0)

  const [ref, { width }] = useMeasure()

  const onClick = () => {
    if (-value === width - WIDTH) {
      return
    } else if (-value + WIDTH > width - WIDTH) {
      const offset = width - WIDTH + value
      setValue((prev) => prev - offset)
      setX({ x: value - offset })
    } else {
      setValue((prev) => prev - WIDTH)
      setX({ x: value - WIDTH })
    }
  }

  const bind = useDrag(
    ({ movement: [x], down }) => {
      setX({ x: value + x })

      if (!down) {
        setValue((prev) => prev + x)
      }
    },
    {
      bounds: {
        left: -width + WIDTH - value,
        right: -value,
      },
      rubberband: true,
      axis: 'x',
    }
  )

  const renderImages = () =>
    imgs.slice(0, 3).map((img, index) => (
      <li className={classes.container} key={index}>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      </li>
    ))

  return (
    <div className={clsx(classes.wrapper, classes.simple)}>
      <animated.ul
        {...bind()}
        ref={ref}
        className={classes.list}
        style={{
          transform: x.interpolate((val) => `translate3d(${val}px, 0, 0)`),
        }}
      >
        {renderImages()}
      </animated.ul>
      <button
        onClick={onClick}
        style={{ position: 'absolute', bottom: 5, right: 5 }}
      >
        Scroll right
      </button>
    </div>
  )
}
