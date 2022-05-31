import React, { useRef, useState, useEffect } from 'react'

import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import clsx from 'clsx'

import imgs from './imgs'
import useStyles from './useStyles'

const wheel = (y: number) => {
  const imgHeight = window.innerWidth * 0.2 - 20
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}

document.addEventListener('gesturestart', (e) => e.preventDefault())
document.addEventListener('gesturechange', (e) => e.preventDefault())

export const MultiCard = () => {
  const classes = useStyles()

  const domTarget = useRef(null)

  const [{ x, y, scale }, set] = useSpring(() => ({
    scale: 1,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const [{ wheelY }, setWheel] = useSpring(() => ({ wheelY: 0 }))
  const [drag, setDrag] = useState(false)

  const bind = useGesture(
    {
      onDragStart: () => setDrag(true),
      onDrag: ({ offset: [x, y] }) => set({ x, y, scale: 1 }),
      onDragEnd: () => setDrag(false),
      onHover: ({ hovering }) => !hovering && set({ scale: 1 }),
      onWheel: ({ offset: [, y] }) => setWheel({ wheelY: y }),
    },
    { domTarget, eventOptions: { passive: false } }
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(bind as any, [bind])

  return (
    <animated.div
      ref={domTarget}
      className={clsx(classes.card, drag && 'dragging')}
      style={{
        transform: to(
          [x, y, scale as any],
          (x, y, s) =>
            `perspective(600px) translate3d(${x}px, ${y}px, 0) scale(${s})`
        ),
        // x,
        // y,
        // scale: interpolate([scale as any, zoom as any] as any, (s, z) => s + z),
      }}
    >
      <animated.div
        className={classes.inner}
        style={{ transform: wheelY.to(wheel) }}
      >
        {imgs.map((img, i) => (
          <div key={i} style={{ backgroundImage: `url(${img})` }} />
        ))}
      </animated.div>
    </animated.div>
  )
}
