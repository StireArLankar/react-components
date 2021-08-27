import React, { Fragment, useCallback } from 'react'
import { useSpring, animated, config } from 'react-spring'

import { ReactComponent as Filter } from './filter.svg'
import useStyles from './useStyles'

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

  const { y, c }: any = useSpring({
    from: { y: -1, c: `#f9f586` },
    to: handler as any,
    config: (key: string) => (key === 'y' ? configY : config.slow),
  })

  const classes = useStyles()

  return (
    <Fragment>
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
              (y: number) =>
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
    </Fragment>
  )
}
