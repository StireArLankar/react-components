import { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import useMeasure from 'react-use-measure'

import { animated, useTransition, to } from '@react-spring/web'

import classes from './_classes.css'

export interface PopupWithAnchorProps {
  isOpen: boolean
  position: 'top' | 'bottom'

  onClose: () => void
}

const getOffset = (x: number, pos: 'top' | 'bottom') =>
  pos === 'top' ? -x * 10 : x * 10

const trans = (o: number, pos: 'top' | 'bottom') =>
  `translate(-50%, ${pos === 'top' ? -100 : 0}%)
  translateY(${getOffset(o, pos)}px)`

const BodyPortal = ({ children }: PropsWithChildren<{}>) =>
  createPortal(children, document.body)

export const PopupWithAnchor = (
  props: PropsWithChildren<PopupWithAnchorProps>
) => {
  const { isOpen, children, onClose, position } = props

  const [innerIsOpen, setInnerIsOpen] = useState(isOpen)

  const contentRef = useRef<HTMLDivElement>(null)
  const [anchorRef, bounds] = useMeasure({
    debounce: 50,
    scroll: true,
  })

  const { x, y, width, height } = bounds

  useEffect(() => {
    setInnerIsOpen(isOpen)

    const clickHandler = (evt: any) =>
      !evt.path.includes(contentRef.current) && setInnerIsOpen(false)

    isOpen && document.addEventListener('click', clickHandler, true)

    return () => document.removeEventListener('click', clickHandler, true)
  }, [isOpen])

  const transition = useTransition(innerIsOpen, {
    from: { o: 0, x, y, width, height },
    enter: { o: 1, x, y, width, height },
    leave: { o: 0, x, y, width, height },
    update: () => ({ o: innerIsOpen ? 1 : 0, x, y, width, height }),
    config: { tension: 250, clamp: true },
    onRest: () => !innerIsOpen && onClose(),
  })

  return (
    <div className={classes.anchor} ref={anchorRef}>
      <BodyPortal>
        {transition(({ o, x, y, width, height }, item, _, key) =>
          item ? (
            <animated.div
              className={classes.popup({ side: position })}
              key={key}
              ref={contentRef}
              style={{
                opacity: o,
                transform: o.to((o) => trans(o, position)),
                left: to([x, width], (x, w) => x + w / 2),
                top: to([y, height], (y, h) =>
                  position === 'top' ? y : y + h
                ),
              }}
            >
              {children}
            </animated.div>
          ) : null
        )}
      </BodyPortal>
    </div>
  )
}
