import { useCallback } from 'react'

import { animated, config, useSpring } from '@react-spring/web'

import classes from './_classes.css'
import { ReactComponent as Filter } from './filter.svg'

const configY = {
  friction: 10,
  mass: 2,
  tension: 300,
}

export const Blob = () => {
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

  return (
    <>
      <Filter style={{ display: 'none' }} />
      <animated.div style={{ filter: 'url(#goo)', color: c }}>
        <div
          className={classes.box}
          style={{ backgroundColor: 'currentColor' }}
        />
        <animated.div
          className={classes.box}
          style={{
            transform: y.to(
              (y) =>
                `translate(-50%, -50%) scale(${1 + y * 0.3}, ${1 - y * 0.3})`
            ),
            backgroundColor: 'currentColor',
            top: '50%',
            left: '50%',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 100,
            height: 20,
            left: -120,
            top: -80,
            transform: 'translateY(-50%) rotate(45deg)',
            backgroundColor: 'currentColor',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 100,
            height: 20,
            left: -120,
            bottom: -80,
            transform: 'translateY(50%) rotate(-45deg)',
            backgroundColor: 'currentColor',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 100,
            height: 20,
            left: -120,
            bottom: -80,
            transform: 'translateY(50%) rotate(-45deg)',
            backgroundColor: 'currentColor',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 70,
            height: 20,
            left: -200,
            transform: 'translateY(-50%)',
            backgroundColor: 'currentColor',
          }}
        />
      </animated.div>
    </>
  )
}
