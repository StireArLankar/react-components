import React, { useRef, useState, useEffect } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import imgs from './imgs'
import useStyles from './useStyles'
import clsx from 'clsx'

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

  useEffect(bind as any, [bind])

  return (
    <animated.div
      ref={domTarget}
      className={clsx(classes.card, drag && 'dragging')}
      style={{
        transform: interpolate(
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
        style={{ transform: wheelY.interpolate(wheel) }}
      >
        {imgs.map((img, i) => (
          <div key={i} style={{ backgroundImage: `url(${img})` }} />
        ))}
      </animated.div>
    </animated.div>
  )
}
