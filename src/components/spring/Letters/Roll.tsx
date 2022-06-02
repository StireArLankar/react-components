import { useEffect, useMemo, useState } from 'react'

import { animated, config, useTrail } from '@react-spring/web'

import classes from './_classes.css'

export interface JumpProps {
  children: string
}

const trans = (y: number) => `translateX(${y * 200}px) rotate(${y * 360}deg)`

export const Roll = (props: JumpProps) => {
  const { children } = props

  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFlag((prev) => !prev), 1000)
    return () => clearTimeout(timer)
  }, [flag])

  const chars = useMemo(() => children.split(''), [children])

  const trails = useTrail(children.length, {
    from: { x: 1 },
    to: { x: 0 },
    reverse: flag,
    config: config.stiff,
  })

  const renderLetters = () =>
    trails.map((props, index) => (
      <animated.span
        key={index}
        className={classes.char}
        style={{ transform: props.x.to(trans) }}
      >
        {chars[index]}
      </animated.span>
    ))

  return <div className={classes.text}>{renderLetters()}</div>
}
