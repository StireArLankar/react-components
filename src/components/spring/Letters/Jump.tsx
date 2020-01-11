import React, { useMemo, Fragment } from 'react'
import { animated, useTrail, config } from 'react-spring'
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
  // const springs = useSprings(
  //   chars.length,
  //   chars.map((char, index) => ({
  //     from: {
  //       y: 1,
  //     },
  //     to: async (next: any) => {
  //       while (1) {
  //         await next({ y: 0 })
  //         await next({ y: 1 })
  //       }
  //     },
  //     delay: index * 150,
  //     clamp: true,
  //     config: config.gentle,
  //   }))
  // )

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

  // const renderSprings = () =>
  //   springs.map((props, index) => (
  //     <animated.span
  //       key={index}
  //       className={classes.char}
  //       style={{ transform: (props as any).y.interpolate(trans) }}
  //     >
  //       {chars[index]}
  //     </animated.span>
  //   ))

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

  return (
    <Fragment>
      <div className={classes.text}>{renderLetters()}</div>
      {/* <div className={classes.text}>{renderSprings()}</div> */}
    </Fragment>
  )
}
