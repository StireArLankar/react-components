import React, { memo } from 'react'
import {
  animated,
  interpolate,
  OpaqueInterpolation,
  useSpring,
} from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { Tuple } from 'react-use-gesture/dist/types'

import useStyles from './styles'

const trans = (...args: any) => `translate(${args[0]}px, ${args[1]}px)`
const t = (val: number) => val.toFixed(0)
const tt = (val: number) => val.toFixed(2)

const boundsInner = { bottom: 500, left: 0, right: 500, top: 0 }
const boundOuter = { bottom: 590, left: -90, right: 590, top: -90 }

const interpolatE: any = interpolate

export default memo(() => {
  const [{ p1, p2, p3, p4 }, set] = useSpring(() => ({
    p1: [0, 500],
    p2: [100, 400],
    p3: [400, 100],
    p4: [500, 0],
  }))

  const bind1 = useDrag(({ movement: [x, y] }) => set({ p1: [x, y] }), {
    initial: () => p1.getValue() as Tuple<number>,
    bounds: boundsInner,
  })

  const bind2 = useDrag(({ movement: [x, y] }) => set({ p2: [x, y] }), {
    initial: () => p2.getValue() as Tuple<number>,
    bounds: boundOuter,
  })

  const bind3 = useDrag(({ movement: [x, y] }) => set({ p3: [x, y] }), {
    initial: () => p3.getValue() as Tuple<number>,
    bounds: boundOuter,
  })

  const bind4 = useDrag(({ movement: [x, y] }) => set({ p4: [x, y] }), {
    initial: () => p4.getValue() as Tuple<number>,
    bounds: boundsInner,
  })

  const classes = useStyles()

  const renderPoint = (xy: OpaqueInterpolation<number[]>, bind: any) => (
    <animated.circle
      cx={0}
      cy={0}
      r={10}
      style={{ transform: xy.interpolate(trans) }}
      stroke='none'
      fill='red'
      {...bind()}
    />
  )

  return (
    <div className={classes.wrapper}>
      <animated.div className={classes.content}>
        <animated.div>
          {interpolatE(
            [p1, p2, p3, p4],
            (p1: any, p2: any, p3: any, p4: any) =>
              `M${t(p1[0])},${t(p1[1])} C${t(p2[0])},${t(p2[1])} ${t(
                p3[0]
              )},${t(p3[1])} ${t(p4[0])},${t(p4[1])}`
          )}
        </animated.div>
        <animated.div>
          {interpolatE(
            [p1, p2, p3, p4],
            (p1: any, p2: any, p3: any, p4: any) => {
              const x1 = t(p1[0])
              const y1 = t(p1[1])
              const x4 = t(p4[0])
              const y4 = t(p4[1])

              if (x1 === '0' && y1 === '500' && x4 === '500' && y4 === '0') {
                return `(${tt(p2[0] / 500)}, ${tt(1 - p2[1] / 500)}, ${tt(
                  p3[0] / 500
                )}, ${tt(1 - p3[1] / 500)})`
              }

              return ``
            }
          )}
        </animated.div>
      </animated.div>
      <animated.div className={classes.content} />

      <svg viewBox='-100 -100 700 700' className={classes.svg} fill='none'>
        <animated.path
          stroke='blue'
          strokeWidth='1'
          d={interpolatE(
            [p1, p2],
            (a: any, b: any) => `M${a[0]},${a[1]} L${b[0]},${b[1]}`
          )}
        />
        <animated.path
          stroke='blue'
          strokeWidth='1'
          d={interpolatE(
            [p3, p4],
            (a: any, b: any) => `M${a[0]},${a[1]} L${b[0]},${b[1]}`
          )}
        />
        <animated.path
          stroke='black'
          strokeWidth='1'
          d={interpolatE(
            [p1, p2, p3, p4],
            (p1: any, p2: any, p3: any, p4: any) =>
              `M${p1[0]},${p1[1]} C${p2[0]},${p2[1]} ${p3[0]},${p3[1]} ${p4[0]},${p4[1]}`
          )}
        />
        {renderPoint(p1 as any, bind1)}
        {renderPoint(p2 as any, bind2)}
        {renderPoint(p3 as any, bind3)}
        {renderPoint(p4 as any, bind4)}
      </svg>
    </div>
  )
})
