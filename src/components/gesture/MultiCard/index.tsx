import { useState } from 'react'

import { animated, to, useSpring } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

import classes from './_classes.css'
import imgs from './imgs'

const wheel = (y: number) => {
  const imgHeight = window.innerWidth * 0.2 - 20
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}

// document.addEventListener('gesturestart', (e) => e.preventDefault())
// document.addEventListener('gesturechange', (e) => e.preventDefault())

export const MultiCard = () => {
  const [{ x, y, scale }, spring] = useSpring(() => ({
    scale: 1,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  const [{ wheelY }, wheelSpring] = useSpring(() => ({ wheelY: 0 }))
  const [drag, setDrag] = useState(false)

  const bind = useGesture(
    {
      onDragStart: () => setDrag(true),
      onDrag: ({ offset: [x, y] }) => spring.start({ x, y, scale: 1 }),
      onDragEnd: () => setDrag(false),
      onHover: ({ hovering }) => !hovering && spring.start({ scale: 1 }),
      onWheel: ({ offset: [, y] }) => wheelSpring.start({ wheelY: y }),
    },
    { eventOptions: { passive: false } }
  )

  return (
    <animated.div
      {...bind()}
      className={classes.card({ drag })}
      style={{
        transform: to(
          [x, y, scale],
          (x, y, s) =>
            `perspective(600px) translate3d(${x}px, ${y}px, 0) scale(${s})`
        ),
        // x,
        // y,
        // scale: to([scale as any, zoom as any] as any, (s, z) => s + z),
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
