import React, { useMemo, Fragment, useCallback } from 'react'
import { animated, useTrail, config, useSprings } from 'react-spring'
import useStyles from './Letters.styles'

export interface JumpProps {
  children: string
}

const trans = (y: number) => `translateY(${y * 50}px)`

export const Jump = (props: JumpProps) => {
  const { children } = props

  const classes = useStyles()

  const chars = useMemo(() => children.split(''), [children])

  const asyncTo = useCallback(async (next: any) => {
    while (1) {
      await next({ y: 0 })
      await next({ y: 1 })
    }
  }, [])

  // intends to stack chars together
  const springs = useSprings(
    chars.length,
    chars.map((_, index) => ({
      from: { y: 1 },
      to: asyncTo,
      clamp: true,
      // config: config.gentle,
      config: {
        mass: (index + 1) * 1,
        friction: 20 + index * 3,
      },
    }))
  )

  const trails = useTrail(children.length, {
    from: { y: 1 },
    to: asyncTo,
    config: config.stiff,
  })

  const trails2 = useTrail(children.length, {
    from: { y: 1 },
    to: asyncTo,
    config: (i: string) => ({ mass: 2 + Number(i) * 0.1 }),
  })

  const [springs2, set2] = useSprings(children.length, (i) => ({
    config: {
      mass: (i + 1) * 1,
      friction: 20 + i * 3,
    },
    from: { y: 0 },
    to: { y: 1 },
    onRest: (key: any) => {
      if (i === 0) {
        setTimeout(() => set2({ to: { y: key.y === 0 ? 1 : 0 } }))
      }
    },
  }))

  const [springs3] = useSprings(children.length, (i) => ({
    from: { y: 0 },
    to: asyncTo,
    delay: (i + 1) * 100 + 500,
    config: { clamp: true, tension: 200, mass: 20 },
  }))

  const renderArr = (arr: any[]) =>
    arr.map<any>((props, index): any => (
      <animated.span
        key={index}
        className={classes.char}
        style={{ transform: props.y.interpolate(trans) }}
      >
        {chars[index]}
      </animated.span>
    ))

  return (
    <Fragment>
      <div className={classes.text}>{renderArr(trails)}</div>
      <div className={classes.text}>{renderArr(trails2)}</div>
      <div className={classes.text}>{renderArr(springs)}</div>
      <div className={classes.text}>{renderArr(springs2)}</div>
      <div className={classes.text}>{renderArr(springs3)}</div>
    </Fragment>
  )
}
