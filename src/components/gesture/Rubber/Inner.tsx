import { useCallback } from 'react'

import { animated, config, useSpring } from '@react-spring/web'

import classes from './_classes.css'
import { ReactComponent as Filter } from './filter.svg'

const configY = {
  friction: 10,
  mass: 2,
  tension: 300,
}

const rot1 = (y: number, index: number) =>
  `translateY(-50%) rotate(${45 * index}deg) translate3d(${70 * y}px, 0, 0)`

const rot2 = (index: number) =>
  `translateY(-50%) rotate(${45 * index}deg) translateX(70px)`

export interface InnerProps {
  bump?: boolean
}

const array = Array.from({ length: 8 }, () => '')

export const Inner = (props: InnerProps) => {
  const { bump } = props

  const handler = useCallback(async (next: any) => {
    while (1) {
      await next({ y: 1, c: `#96fbc4` })
      await next({ y: -1, c: `#f9f586` })
    }
  }, [])

  const { y, c } = useSpring({
    from: { y: -1, c: `#f9f586` },
    to: handler,
    config: (key) => (key === 'y' ? configY : config.slow),
  })

  const renderPlancs = () =>
    array.map((_, index) => (
      <animated.div
        style={{
          position: 'absolute',
          width: 40,
          height: 20,
          transform: bump ? y.to((y) => rot1(y, index)) : rot2(index),
          backgroundColor: 'currentColor',
          transformOrigin: 'left',
          top: '50%',
          left: '50%',
          willChange: 'transform',
        }}
      />
    ))

  return (
    <>
      <Filter style={{ display: 'none' }} />
      <animated.div
        style={{ filter: 'url(#goo)', color: c }}
        className={classes.rotation}
      >
        <animated.div
          style={{
            transform: y.to(
              (y) => `translate(-50%, -50%) scale(${1 + y * 0.3})`
            ),
            backgroundColor: 'currentColor',
            top: '50%',
            left: '50%',
            borderRadius: '50%',
            position: 'absolute',
            width: 100,
            height: 100,
          }}
        />
        {renderPlancs()}
        <div
          style={{
            borderColor: 'currentColor',
            borderStyle: 'solid',
            borderWidth: 10,
            height: 260,
            width: 260,
            borderRadius: '50%',
          }}
        />
      </animated.div>
    </>
  )
}
