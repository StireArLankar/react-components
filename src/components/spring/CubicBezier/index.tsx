import { memo } from 'react'

import { animated, to, useSpring, SpringValue } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import * as classes from './classes.css'

type Tuple<T> = [T, T]

const trans = (...args: [number, number]) =>
  `translate(${args[0]}px, ${args[1]}px)`

const t = (val: number) => val.toFixed(0)
const tt = (val: number) => val.toFixed(2)

const boundsInner = { bottom: 500, left: 0, right: 500, top: 0 }
const boundOuter = { bottom: 590, left: -90, right: 590, top: -90 }

export default memo(() => {
  const [{ p1, p2, p3, p4 }, set] = useSpring(() => ({
    p1: [0, 500] as Tuple<number>,
    p2: [100, 400] as Tuple<number>,
    p3: [400, 100] as Tuple<number>,
    p4: [500, 0] as Tuple<number>,
  }))

  const bind1 = useDrag(({ offset: [x, y] }) => set.start({ p1: [x, y] }), {
    from: () => p1.get(),
    bounds: boundsInner,
  })

  const bind2 = useDrag(({ offset: [x, y] }) => set.start({ p2: [x, y] }), {
    from: () => p2.get(),
    bounds: boundOuter,
  })

  const bind3 = useDrag(({ offset: [x, y] }) => set.start({ p3: [x, y] }), {
    from: () => p3.get(),
    bounds: boundOuter,
  })

  const bind4 = useDrag(({ offset: [x, y] }) => set.start({ p4: [x, y] }), {
    from: () => p4.get(),
    bounds: boundsInner,
  })

  // const classes = useStyles()

  const renderPoint = (xy: SpringValue<Tuple<number>>, bind: typeof bind1) => (
    <animated.circle
      cx={0}
      cy={0}
      r={10}
      className={classes.circle}
      style={{ transform: xy.to(trans) }}
      stroke='none'
      fill='red'
      {...bind()}
    />
  )

  return (
    <div className={classes.wrapper}>
      <animated.div className={classes.content}>
        <animated.div>
          {to(
            [p1, p2, p3, p4],
            (p1, p2, p3, p4) =>
              `M${t(p1[0])},${t(p1[1])} C${t(p2[0])},${t(p2[1])} ${t(
                p3[0]
              )},${t(p3[1])} ${t(p4[0])},${t(p4[1])}`
          )}
        </animated.div>
        <animated.div>
          {to([p1, p2, p3, p4], (p1, p2, p3, p4) => {
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
          })}
        </animated.div>
      </animated.div>

      <svg viewBox='-100 -100 700 700' className={classes.svg} fill='none'>
        <animated.path
          stroke='blue'
          strokeWidth='1'
          d={to([p1, p2], (a, b) => `M${a[0]},${a[1]} L${b[0]},${b[1]}`)}
        />
        <animated.path
          stroke='blue'
          strokeWidth='1'
          d={to([p3, p4], (a, b) => `M${a[0]},${a[1]} L${b[0]},${b[1]}`)}
        />
        <animated.path
          stroke='black'
          strokeWidth='1'
          d={to(
            [p1, p2, p3, p4],
            (p1, p2, p3, p4) =>
              `M${p1[0]},${p1[1]} C${p2[0]},${p2[1]} ${p3[0]},${p3[1]} ${p4[0]},${p4[1]}`
          )}
        />
        {renderPoint(p1, bind1)}
        {renderPoint(p2, bind2)}
        {renderPoint(p3, bind3)}
        {renderPoint(p4, bind4)}
      </svg>
    </div>
  )
})
