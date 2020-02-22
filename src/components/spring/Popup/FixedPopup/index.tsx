import React, {
  useEffect,
  PropsWithChildren,
  useState,
  useRef,
  forwardRef,
  useCallback,
} from 'react'
import { useTransition, animated, useSpring } from 'react-spring'
import { createPortal } from 'react-dom'
import debounce from 'lodash-es/debounce'
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

    const contentRef = useRef<HTMLDivElement>(null)

    const classes = useStyles()

    const isMounted = useRef(false)

    const [{ left, top }, setPos] = useSpring(() => ({
      left: 0,
      top: 0,
    }))

    const updatePos = useCallback(() => {
      const { x, y, width, height } = ref.current?.getBoundingClientRect() || {}

      const left = x + width / 2 + window.pageXOffset || 0
      const my = y + window.pageYOffset || 0
      const top = position === 'top' ? my : my + height

      setPos({ left, top })
    }, [setPos, ref, position])

    useEffect(() => {
      if (isMounted.current) {
        return
      }

      let timer: NodeJS.Timer

      const handler = () => {
        if (ref.current) {
          isMounted.current = true
          updatePos()
        } else {
          timer = setTimeout(handler, 100)
        }
      }

      timer = setTimeout(handler, 100)

      return () => clearTimeout(timer)
    }, [ref, updatePos])

    useEffect(() => {
      setInnerIsOpen(isOpen)

      const clickHandler = (evt: any) =>
        !evt.path.includes(contentRef.current) && setInnerIsOpen(false)

      const resizeHandler = debounce(() => updatePos(), 100)

      if (isOpen) {
        document.addEventListener('click', clickHandler, true)
        window.addEventListener('resize', resizeHandler)
        resizeHandler()
      }

      return () => {
        document.removeEventListener('click', clickHandler, true)
        window.removeEventListener('resize', resizeHandler)
      }
    }, [isOpen, updatePos])

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
                left,
                top,
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
