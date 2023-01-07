import { useMemo } from 'react'

import type { SpringToFn } from '@react-spring/web'
import { animated, config, useSprings, useTrail } from '@react-spring/web'

import classes from './_classes.css'

export interface JumpProps {
  children: string
}

const trans = (y: number) => `translateY(${y * 50}px)`

const asyncTo: SpringToFn<{ y: number }> = async (next) => {
  while (1) {
    await next({ y: 0 })
    await next({ y: 1 })
  }
}

export const Jump = (props: JumpProps) => {
  const { children } = props

  const chars = useMemo(() => children.split(''), [children])

  // intends to stack chars together
  const springs = useSprings(
    chars.length,
    chars.map((_, index) => ({
      from: { y: 1 },
      to: asyncTo,
      clamp: true,
      config: {
        mass: (index + 1) * 1,
        friction: 20 + index * 3,
      },
    }))
  )

  const trails = useTrail(chars.length, {
    from: { y: 1 },
    to: asyncTo,
    config: config.stiff,
  })

  const [trails2] = useTrail(chars.length, (i) => ({
    from: { y: 1 },
    to: asyncTo,
    config: () => ({ mass: 10 + i * 0.1, tension: 200 }),
  }))

  const [springs2, set2] = useSprings(children.length, (i) => ({
    config: {
      mass: (i + 1) * 1,
      friction: 20 + i * 3,
    },
    from: { y: 0 },
    to: { y: 1 },
    onRest: (result) => {
      if (i === 0) {
        setTimeout(() =>
          set2.start({ to: { y: result.value.y === 0 ? 1 : 0 } })
        )
      }
    },
  }))

  const [springs3] = useSprings(children.length, (i) => ({
    from: { y: 0 },
    to: asyncTo,
    delay: (i + 1) * 100 + 500,
    config: { clamp: true, tension: 200, mass: 20 },
  }))

  const renderArr = (arr: typeof springs3) =>
    arr.map((props, index) => (
      <animated.span
        key={index}
        className={classes.char}
        style={{ transform: props.y.to(trans) }}
      >
        {chars[index]}
      </animated.span>
    ))

  return (
    <>
      <div className={classes.text}>{renderArr(trails)}</div>
      <div className={classes.text}>{renderArr(trails2)}</div>
      <div className={classes.text}>{renderArr(springs)}</div>
      <div className={classes.text}>{renderArr(springs2)}</div>
      <div className={classes.text}>{renderArr(springs3)}</div>
    </>
  )
}
