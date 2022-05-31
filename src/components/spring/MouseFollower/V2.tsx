import { useTrail, animated } from '@react-spring/web'

import classes from './_classes.css'

const fast = { tension: 1200, friction: 40 }

const slow = { mass: 10, tension: 200, friction: 50 }

const trans = (x: number, y: number): string =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export interface MouseFollowerProps {
  amount?: number
  skew?: number
}

export const MouseFollower = (props: MouseFollowerProps) => {
  const { amount = 3, skew = 5 } = props

  const [trail, set] = useTrail(amount, (i) => ({
    xy: [0, 0] as [number, number],
    config: () => (i === 0 ? fast : slow),
  }))

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        style={{ display: 'none' }}
      >
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
              result='goo'
            />
            <feComposite in='SourceGraphic' in2='goo' operator='atop' />
          </filter>
          {/* <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              result='blur'
              stdDeviation='10'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
              result='goo'
            />
            <feGaussianBlur in='goo' stdDeviation='3' result='shadow' />
            <feColorMatrix
              in='shadow'
              mode='matrix'
              values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2'
              result='shadow'
            />
            <feOffset in='shadow' dx='1' dy='1' result='shadow' />
            <feComposite in2='shadow' in='goo' result='goo' />
            <feComposite
              in2='goo'
              in='SourceGraphic'
              result='mix'
              operator='atop'
            />
          </filter> */}
          {/* <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              result='blur'
              stdDeviation='10'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -7'
              result='goo'
            />
            <feComposite
              in2='goo'
              in='SourceGraphic'
              result='mix'
              operator='atop'
            />
          </filter> */}
        </defs>
      </svg>

      <div
        className={classes.wrapper}
        onMouseMove={(e) => set.start({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map(({ xy }, index) => (
          <animated.div
            className={classes.alternativeGoo}
            key={index}
            style={{ transform: xy.to(trans) }}
          />
        ))}
        <div
          className={classes.lightcoral}
          style={{
            transform: `translate(-50%, -50%) rotate(45deg) skew(${skew}deg, ${skew}deg)`,
          }}
        />
      </div>
    </>
  )
}

export default MouseFollower
