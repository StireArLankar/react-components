import { useState } from 'react'
import useMeasure from 'react-use-measure'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'
import imgs from './imgs'

const WIDTH = 200

export const SimpleSlider = () => {
  const [animStyles, spring] = useSpring(() => ({ x: 0 }))

  const [value, setValue] = useState(0)

  const [ref, { width }] = useMeasure()

  const onClick = () => {
    if (-value === width - WIDTH) {
      return
    } else if (-value + WIDTH > width - WIDTH) {
      const offset = width - WIDTH + value
      setValue((prev) => prev - offset)
      spring.start({ x: value - offset })
    } else {
      setValue((prev) => prev - WIDTH)
      spring.start({ x: value - WIDTH })
    }
  }

  const bind = useDrag(
    ({ movement: [x], down }) => {
      spring.start({ x: value + x })

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
    <div className={classes.wrapper}>
      <animated.ul
        {...bind()}
        ref={ref}
        className={classes.list}
        style={animStyles}
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
