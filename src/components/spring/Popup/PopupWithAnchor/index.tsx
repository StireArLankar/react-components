import clsx from 'clsx'
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { animated, useTransition, interpolate } from 'react-spring'
import useStyles from './PopupWithAnchor.styles'
import useMeasure from 'react-use-measure'

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

  console.table(bounds)

  const classes = useStyles()

  useEffect(() => {
    setInnerIsOpen(isOpen)

    const clickHandler = (evt: any) =>
      !evt.path.includes(contentRef.current) && setInnerIsOpen(false)

    isOpen && document.addEventListener('click', clickHandler, true)

    return () => document.removeEventListener('click', clickHandler, true)
  }, [isOpen])

  const transition = useTransition(innerIsOpen, null, {
    from: { o: 0, x, y, width, height },
    enter: { o: 1, x, y, width, height },
    leave: { o: 0, x, y, width, height },
    update: () => ({ o: innerIsOpen ? 1 : 0, x, y, width, height }),
    config: { tension: 250, clamp: true },
    onRest: () => !innerIsOpen && onClose(),
  } as any)

  return (
    <div className={classes.anchor} ref={anchorRef}>
      <BodyPortal>
        {transition.map(
          ({ item, key, props: { o, x, y, width, height } }: any) =>
            item ? (
              <animated.div
                className={clsx(classes.popup, classes[position])}
                key={key}
                style={{
                  opacity: o,
                  transform: o.to((o: number) => trans(o, position)),
                  left: interpolate([x, width], (x, w) => x + w / 2),
                  top: interpolate([y, height], (y, h) =>
                    position === 'top' ? y : y + h
                  ),
                  position: 'fixed',
                }}
                ref={contentRef}
              >
                {children}
              </animated.div>
            ) : null
        )}
      </BodyPortal>
    </div>
  )
}
