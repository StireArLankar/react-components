import { useSpring, animated } from '@react-spring/web'

import classes from './_classes.css'

const calc = (x: number, y: number): [number, number, number] => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
]

const trans = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const Card = () => {
  const [props, spring] = useSpring(() => ({
    xys: [0, 0, 1] as [number, number, number],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  return (
    <animated.div
      className={classes.card}
      onMouseMove={({ clientX: x, clientY: y }) =>
        spring.start({ xys: calc(x, y) })
      }
      onMouseLeave={() => spring.start({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans) }}
    />
  )
}
