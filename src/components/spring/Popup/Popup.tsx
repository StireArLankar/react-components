import { useEffect, PropsWithChildren, useState, useRef } from 'react'

import { useTransition, animated } from '@react-spring/web'

import classes from './_classes.css'

export interface PopupProps {
  isOpen: boolean
  position: 'top' | 'bottom'

  onClose: () => void
}

const getOffset = (x: number, pos: 'top' | 'bottom') =>
  pos === 'top' ? (1 - x) * 10 : (x - 1) * 10

export const Popup = (props: PropsWithChildren<PopupProps>) => {
  const { isOpen, children, onClose, position: side } = props

  const [innerIsOpen, setInnerIsOpen] = useState(isOpen)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setInnerIsOpen(isOpen)

    const clickHandler = (evt: any) =>
      !evt.path.includes(ref.current) && setInnerIsOpen(false)

    isOpen && document.addEventListener('click', clickHandler, true)
    return () => document.removeEventListener('click', clickHandler, true)
  }, [isOpen])

  const transition = useTransition(innerIsOpen, {
    from: { o: 0 },
    enter: { o: 1 },
    leave: { o: 0 },
    config: { tension: 250, clamp: true },
    onRest: () => !innerIsOpen && onClose(),
  })

  return (
    <>
      {transition(({ o }, item, _, key) =>
        item ? (
          <animated.div
            className={classes.popup({ side })}
            key={key}
            style={{
              opacity: o,
              transform: o.to(
                (o) => `translate(-50%, ${getOffset(o, side)}px)`
              ),
            }}
            ref={ref}
          >
            {children}
          </animated.div>
        ) : null
      )}
    </>
  )
}
