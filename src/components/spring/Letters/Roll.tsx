import React, { useMemo, Fragment, useState, useEffect } from 'react'
import { animated, useTrail, config } from 'react-spring'
import { useStyles } from './useStyles'

export interface JumpProps {
  children: string
}

const trans = (y: number) => `translateX(${y * 200}px) rotate(${y * 360}deg)`

export const Roll = (props: JumpProps) => {
  const { children } = props
  const [flag, setFlag] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000)
  }, [flag])

  const chars = useMemo(() => children.split(''), [children])

  const trails = useTrail(children.length, {
    from: {
      x: 1,
    },
    to: {
      x: 0,
    },
    reverse: flag,
    config: config.stiff,
  })

  const renderLetters = () =>
    trails.map((props, index) => (
      <animated.span
        key={index}
        className={classes.char}
        style={{ transform: (props as any).x.interpolate(trans) }}
      >
        {chars[index]}
      </animated.span>
    ))

  return (
    <Fragment>
      <div className={classes.text}>{renderLetters()}</div>
    </Fragment>
  )
}
