import React, {
  Fragment,
  useEffect,
  PropsWithChildren,
  useState,
  useRef,
} from 'react'
import { useTransition, animated } from 'react-spring'
import clsx from 'clsx'

import useStyles from './Popup.styles'

export interface PopupProps {
  isOpen: boolean
  position: 'top' | 'bottom'

  onClose: () => void
}

const getOffset = (x: number, pos: 'top' | 'bottom') =>
  pos === 'top' ? (1 - x) * 10 : (x - 1) * 10

export const Popup = (props: PropsWithChildren<PopupProps>) => {
  const { isOpen, children, onClose, position } = props

  const [innerIsOpen, setInnerIsOpen] = useState(isOpen)

  const ref = useRef<HTMLDivElement>(null)

  const classes = useStyles()

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
    <Fragment>
      {transition(({ o }, item, _, key) =>
        item ? (
          <animated.div
            className={clsx(classes.popup, classes[position])}
            key={key}
            style={{
              opacity: o,
              transform: o.to(
                (o) => `translate(-50%, ${getOffset(o, position)}px)`
              ),
            }}
            ref={ref}
          >
            {children}
          </animated.div>
        ) : null
      )}
    </Fragment>
  )
}
