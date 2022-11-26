import useMeasure from 'react-use-measure'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'
import imgs from './imgs'

const wheel = (x: number, width: number, count: number) => {
  const start = x % (width * count)
  const offset = -width * (x < 0 ? count + 1 : 1)
  return `translateX(${offset - start}px)`
}

export const HorizontalDrag = () => {
  const [ref, { width }] = useMeasure()
  const [{ wheelY }, setWheel] = useSpring(() => ({ wheelY: 0 }))

  const bind = useDrag(({ offset: [x], velocity: [vx] }) => {
    setWheel({ wheelY: -x })
  })

  return (
    <div className={classes.wrapper} {...bind()}>
      <animated.div
        ref={ref}
        className={classes.horizontal}
        style={{ transform: wheelY.to((val) => wheel(val, width, 5)) }}
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
                transform: 'translate(-50%, -50%)',
                fontSize: '16px',
              }}
              onPointerDown={(evt) => evt.stopPropagation()}
              onMouseDown={(evt) => evt.stopPropagation()}
            >
              Hello
            </button>
          </div>
        ))}
      </animated.div>
    </div>
  )
}
