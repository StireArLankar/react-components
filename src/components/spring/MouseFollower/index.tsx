import { useTrail, animated } from '@react-spring/web'

import classes from './_classes.css'

const fast = { tension: 1200, friction: 40 }

const slow = { mass: 10, tension: 200, friction: 50 }

const trans = (x: number, y: number): string =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const color = (i: number) => `hsl(${i * 100}, 60%, 60%)`

export type MouseFollowerProps = {
  amount?: number
}

export const MouseFollower = (props: MouseFollowerProps) => {
  const { amount = 3 } = props

  const [trail, spring] = useTrail(amount, (i) => ({
    xy: [0, 0] as [number, number],
    config: () => (i === 0 ? fast : slow),
  }))

  return (
    <>
      <svg className={classes.svg}>
        <filter id='goo'>
          <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='30' />
          <feColorMatrix
            in='blur'
            values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7'
          />
        </filter>
      </svg>
      <div
        className={classes.wrapper}
        onMouseMove={(e) => spring.start({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map(({ xy }, index) => (
          <animated.div
            className={classes.goo}
            key={index}
            style={{ transform: xy.to(trans), backgroundColor: color(index) }}
          />
        ))}
      </div>
    </>
  )
}

export default MouseFollower
