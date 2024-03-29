import { useEffect } from 'react'
import useMeasure from 'react-use-measure'

import { animated, config } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

import { useInertia } from '~/hook/useInertia'

import classes from './_classes.css'

const imgs = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=750',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=750',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=750',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=750',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=750',
]

export const Inertia = () => {
  const [{ y }, set] = useInertia<{ y: number }>({ y: 0 })

  const [ref, { height }] = useMeasure()
  const wHeight = window.innerHeight

  const bind = useGesture(
    {
      onDrag: ({
        down,
        offset: [, my],
        velocity: [, vy],
        direction: [, dy],
      }) => {
        if (down) {
          set({ y: my, config: { decay: false, velocity: 0 } })
        } else {
          set({
            y: my,
            config: {
              inertia: true,
              bounds: { y: [-height + wHeight, 0] },
              velocities: { y: vy * dy },
            },
          })
        }
      },
      onWheel: ({ delta: [, dy] }) => {
        set({
          y: Math.max(-height + wHeight, Math.min(y.get() - dy * 3, 0)),
          config: config.stiff,
        })
      },
    },
    {
      drag: {
        from: () => [0, y.get()],
        bounds: { top: -height + wHeight, bottom: 0 },
        rubberband: true,
      },
    }
  )

  useEffect(() => {
    window.document.body.style.overflow = 'hidden'

    return () => {
      window.document.body.style.overflow = ''
    }
  }, [])

  return (
    <animated.div
      ref={ref}
      className={classes.wrapper}
      {...bind()}
      style={{ y }}
    >
      {imgs.map((img, i) => (
        <div
          key={i}
          style={{ backgroundImage: `url(${img})` }}
          className={classes.box}
        />
      ))}
    </animated.div>
  )
}
