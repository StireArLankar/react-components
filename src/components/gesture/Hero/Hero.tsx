import React, { useState, useRef, useLayoutEffect } from 'react'

import {
  useSpring,
  animated,
  useTransition,
  useChain,
  useSpringRef,
} from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

import useStyles from './useStyles'

const trans = (...p: number[]) => `translate3d(${p[0]}px, ${p[1]}px, 0)`

const initial = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: 16,
}

const items = Array.from({ length: 5 }).map((_, i) => i)

export const Hero = () => {
  const classes = useStyles()

  const [isOpen, setIsOpen] = useState(false)
  const openRef = useRef(false)

  const setOpen = (value: boolean) => {
    openRef.current = value
    setIsOpen(value)
  }

  const [isDragging, setIsDragging] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

  const [vals, setVals] = useState(() => ({ ...initial }))

  const innerRef = useSpringRef()

  const inner = useSpring({
    ref: innerRef,
    ...(isOpen ? vals : initial),
    onStart: () => {
      if (openRef.current) {
        document.body.style.overflow = 'hidden'
      }
    },
    onRest: () => {
      if (!openRef.current) {
        document.body.style.overflow = ''
      }
    },
  })

  useLayoutEffect(() => {
    if (isOpen) {
      const bounds = ref.current?.getBoundingClientRect()
      if (bounds) {
        const { top, bottom, right, left } = bounds

        setVals({
          top: -top - 5,
          bottom: bottom - window.innerHeight - 5,
          right: right - window.innerWidth - 5,
          left: -left - 5,
          borderRadius: 0,
        })
      }
    } else {
      setVals({ ...initial })
    }
  }, [isOpen])

  const bind = useGesture(
    {
      onDragStart: () => setIsDragging(true),
      // If its not a drag (===click) then open hero
      onDragEnd: () => {
        if (!isDragging) {
          setOpen(true)
        } else {
          setIsDragging(false)
        }
      },
      onDrag: ({ offset: [x, y], cancel }) => {
        // If closed - then can move, otherwive cancel drag
        !isOpen ? set({ xy: [x, y] }) : cancel && cancel()
      },
    },
    { drag: { filterTaps: true } }
  )

  const contentRef = useSpringRef()
  const transition = useTransition(isOpen, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 200 },
    leave: { opacity: 0, height: 0 },
    ref: contentRef,
  })

  const trailRef = useSpringRef()
  const trail = useTransition(isOpen ? items : [], {
    from: { opacity: 0, x: '100%' },
    enter: { opacity: 1, x: '0%' },
    leave: { opacity: 0, x: '100%' },
    ref: trailRef,
    config: { friction: 20 },
    trail: 100,
  })

  useChain(
    isOpen
      ? [innerRef, contentRef, trailRef]
      : [trailRef, contentRef, innerRef],
    isOpen ? [0, 0.4, 0.8] : [0, 0.4, 0.8]
  )

  const renderItems = () =>
    trail((props, _, __, key) => (
      <animated.div
        key={key}
        style={{ ...props, marginBottom: 10, height: 20, background: 'black' }}
      />
    ))

  const renderContent = () =>
    transition(
      (props, item, _, key) =>
        item && (
          <animated.div key={key} style={props} className={classes.content}>
            <div style={{ height: 200, background: 'red' }}>
              {renderItems()}
            </div>
          </animated.div>
        )
    )

  return (
    <animated.div
      className={classes.box}
      {...bind()}
      ref={ref}
      style={{ transform: xy.to(trans) }}
    >
      <animated.div
        className={classes.inner}
        onDoubleClick={() => setOpen(false)}
        style={{
          ...inner,
          position: isOpen ? 'fixed' : 'absolute',
        }}
      >
        <span role='img' aria-label='test'>
          🏆
        </span>
        {renderContent()}
      </animated.div>
    </animated.div>
  )
}
