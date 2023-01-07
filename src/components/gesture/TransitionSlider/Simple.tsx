import useMeasure from 'react-use-measure'

import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'
import imgs from './imgs'

const WIDTH = 200

export const SimpleSlider = () => {
  const [{ x }, spring] = useSpring(() => ({ x: 0 }))

  const [ref, { width }] = useMeasure()

  const onClick = () => {
    const value = x.get()

    if (-value === width - WIDTH) {
      return
    }

    if (-value + WIDTH > width - WIDTH) {
      const offset = width - WIDTH + value
      spring.start({ x: value - offset })
    } else {
      spring.start({ x: value - WIDTH })
    }
  }

  const bind = useDrag(({ offset: [x] }) => spring.start({ x }), {
    bounds: { left: -width + WIDTH, right: 0 },
    from: () => [x.get(), 0],
    rubberband: true,
    axis: 'x',
  })

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
        style={{ x, touchAction: 'none' }}
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
