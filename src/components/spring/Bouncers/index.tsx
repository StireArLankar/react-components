import React, { useState } from 'react'
import { animated, config, useSpring, useTrail } from '@react-spring/web'

import { useStyles } from './useStyles'

const trans = (x: number, y: number) =>
  `translate(${x}vw, ${y}vh) translate(-50%, -50%)`

export interface BouncersProps {}

export const Bouncers = (props: BouncersProps) => {
  const classes = useStyles()

  const [toggle, setToggle] = useState(false)
  const [isLeft, setIsLeft] = useState(true)

  const onClick = () => setIsLeft((prev) => !prev)

  const { y } = useSpring({
    from: { y: 10 },
    y: 90,
    reverse: toggle,
    onRest: () => setToggle((prev) => !prev),
  })

  const left = isLeft ? 10 : 90

  const trails = useTrail(5, {
    xy: toggle ? [left, 10] : [left, 90],
    config: (i: string) => (Number(i) === 0 ? config.default : config.slow),
  })

  const renderTrails = () =>
    trails.map((props, index) => (
      <animated.div
        className={classes.bouncer}
        key={index}
        style={{ transform: props.xy.to(trans) }}
      />
    ))

  return (
    <div className={classes.wrapper} onClick={onClick}>
      {renderTrails()}
      <animated.div
        className={classes.bouncer}
        style={{
          transform: y.to((y) => trans(10, y)),
          backgroundColor: 'black',
        }}
      />
      <animated.div
        className={classes.bouncer}
        style={{
          transform: y.to((y) => trans(90, y)),
          backgroundColor: 'black',
        }}
      />
    </div>
  )
}
