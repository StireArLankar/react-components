import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import classes from './_classes.css'

const bgInterpolate = {
  range: [-100, 0, 100],
  output: [
    'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
    'linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)',
    'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)',
  ],
  extrapolate: 'clamp' as const,
}

const colorInterpolate = {
  range: [-100, 0, 100],
  output: ['rgb(211, 9, 225)', 'rgb(68, 0, 255)', 'rgb(3, 209, 0)'],
  extrapolate: 'clamp' as const,
}

export const Switch = () => {
  const [{ x }, spring] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(
    ({ movement: [x], down }) => spring.start({ x: down ? x : 0 }),
    {
      bounds: { left: -100, right: 100 },
      rubberband: 0.7,
      axis: 'x',
    }
  )

  return (
    <animated.div
      {...bind()}
      className={classes.container}
      style={{ background: x.to(bgInterpolate) }}
    >
      <animated.div className={classes.box} style={{ x }}>
        <animated.svg
          className={classes.icon}
          viewBox='0 0 50 50'
          style={{ color: x.to(colorInterpolate) }}
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
        >
          <animated.path
            d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
            style={{
              transform: 'translate(5px, 5px)',
              transformOrigin: '20px 20px',
            }}
          />

          <animated.path
            d='M14,26 L 22,33 L 35,16'
            pathLength='1'
            style={{
              strokeDasharray: 1,
              strokeDashoffset: x.to({
                range: [10, 100],
                output: [1, 0],
                extrapolate: 'clamp',
              }),
            }}
          />
          <animated.path
            d='M17,17 L33,33'
            pathLength='1'
            style={{
              strokeDasharray: 1,
              strokeDashoffset: x.to({
                range: [-55, -10],
                output: [0, 1],
                extrapolate: 'clamp',
              }),
            }}
          />
          <animated.path
            d='M33,17 L17,33'
            pathLength='1'
            style={{
              strokeDasharray: 1,
              strokeDashoffset: x.to({
                range: [-100, -50],
                output: [0, 1],
                extrapolate: 'clamp',
              }),
            }}
          />
        </animated.svg>
      </animated.div>
    </animated.div>
  )
}
