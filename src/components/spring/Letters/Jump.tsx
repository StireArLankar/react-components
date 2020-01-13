import React, { useMemo, Fragment } from 'react'
import { animated, useTrail, config, useSprings } from 'react-spring'
import { useStyles } from './useStyles'

export interface JumpProps {
  children: string
}

const trans = (y: number) => `translateY(${y * 50}px)`

export const Jump = (props: JumpProps) => {
  const { children } = props

  const classes = useStyles()

  const chars = useMemo(() => children.split(''), [children])

  // intends to stack chars together
  const springs = useSprings(
    chars.length,
    chars.map((_, index) => ({
      from: {
        y: 1,
      },
      to: async (next: any) => {
        while (1) {
          await next({ y: 0 })
          await next({ y: 1 })
        }
      },
      clamp: true,
      // config: config.gentle,
      config: {
        mass: (index + 1) * 1,
        friction: 20 + index * 3,
      },
    }))
  )

  const trails = useTrail(children.length, {
    from: {
      y: 1,
    },
    to: async (next: any) => {
      while (1) {
        await next({ y: 0 })
        await next({ y: 1 })
      }
    },
    config: config.stiff,
  })

  const trails2 = useTrail(children.length, {
    from: {
      y: 1,
    },
    to: async (next: any) => {
      while (1) {
        await next({ y: 0 })
        await next({ y: 1 })
      }
    },
    config: (i: string) => ({ mass: 2 + Number(i) * 0.1 }),
  })

  const [springs2, set] = useSprings(children.length, (i) => ({
    config: {
      mass: (i + 1) * 1,
      friction: 20 + i * 3,
    },
    from: {
      y: 0,
    },
    to: {
      y: 1,
    },
    onRest: (key: any) => {
      if (i === 0) {
        setTimeout(() => set({ to: { y: key.y === 0 ? 1 : 0 } }))
      }
    },
  }))

  const renderSprings = () =>
    springs.map((props, index) => (
      <animated.span
        key={index}
        className={classes.char}
        style={{ transform: (props as any).y.interpolate(trans) }}
      >
        {chars[index]}
      </animated.span>
    ))

  const renderSprings2 = () =>
    springs2.map((props, index) => (
      <animated.span
        key={index}
        className={classes.char}
        style={{ transform: (props as any).y.interpolate(trans) }}
      >
        {chars[index]}
      </animated.span>
    ))

  const renderLetters = () =>
    trails.map((props, index) => (
      <animated.span
        key={index}
        className={classes.char}
        style={{ transform: (props as any).y.interpolate(trans) }}
      >
        {chars[index]}
      </animated.span>
    ))

  const renderLetters2 = () =>
    trails2.map((props, index) => (
      <animated.span
        key={index}
        className={classes.char}
        style={{ transform: (props as any).y.interpolate(trans) }}
      >
        {chars[index]}
      </animated.span>
    ))

  return (
    <Fragment>
      <div className={classes.text}>{renderLetters()}</div>
      <div className={classes.text}>{renderLetters2()}</div>
      <div className={classes.text}>{renderSprings()}</div>
      <div className={classes.text}>{renderSprings2()}</div>
    </Fragment>
  )
}
