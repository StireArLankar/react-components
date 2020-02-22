import React, {
  useEffect,
  PropsWithChildren,
  useState,
  useRef,
  forwardRef,
} from 'react'
import { useTransition, animated } from 'react-spring'
import { createPortal } from 'react-dom'
import clsx from 'clsx'

import useStyles from './FixedPopup.styles'

export interface FixedPopupProps {
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

export const FixedPopup = forwardRef<any, PropsWithChildren<FixedPopupProps>>(
  (props, ref: any) => {
    const { isOpen, children, onClose, position } = props

    const [innerIsOpen, setInnerIsOpen] = useState(isOpen)
    const [xy, setXY] = useState<[number, number]>([0, 0])

    const contentRef = useRef<HTMLDivElement>(null)

    const classes = useStyles()

    useEffect(() => {
      setInnerIsOpen(isOpen)

      const clickHandler = (evt: any) =>
        !evt.path.includes(contentRef.current) && setInnerIsOpen(false)

      const resizeHandler = () => {
        const { x, y, width, height } =
          ref.current?.getBoundingClientRect() || {}
        const mx = x + width / 2 + window.pageXOffset || 0
        const my = y + window.pageYOffset || 0
        setXY([mx, position === 'top' ? my : my + height])
      }

      if (isOpen) {
        document.addEventListener('click', clickHandler, true)
        window.addEventListener('resize', resizeHandler)
        resizeHandler()
      }

      return () => {
        document.removeEventListener('click', clickHandler, true)
        window.removeEventListener('resize', resizeHandler)
      }
    }, [isOpen, ref, position])

    const transition = useTransition(innerIsOpen, null, {
      from: { o: 0 },
      enter: { o: 1 },
      leave: { o: 0 },
      config: { tension: 250, clamp: true },
      onRest: () => !innerIsOpen && onClose(),
    } as any)

    return (
      <BodyPortal>
        {transition.map(({ item, key, props: { o } }: any) =>
          item ? (
            <animated.div
              className={clsx(classes.popup, classes[position])}
              key={key}
              style={{
                opacity: o,
                transform: o.interpolate((o: number) => trans(o, position)),
                left: xy[0],
                top: xy[1],
              }}
              ref={contentRef}
            >
              {children}
            </animated.div>
          ) : null
        )}
      </BodyPortal>
    )
  }
)
