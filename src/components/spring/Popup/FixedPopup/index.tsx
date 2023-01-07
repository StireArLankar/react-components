import {
  useEffect,
  PropsWithChildren,
  useState,
  useRef,
  forwardRef,
  useCallback,
} from 'react'
import { createPortal } from 'react-dom'

import { useTransition, animated, useSpring } from '@react-spring/web'
import debounce from 'debounce'

import classes from '../PopupWithAnchor/_classes.css'

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

type Props = PropsWithChildren<FixedPopupProps>
export const FixedPopup = forwardRef<any, Props>((props, ref: any) => {
  const { isOpen, children, onClose, position } = props

  const [innerIsOpen, setInnerIsOpen] = useState(isOpen)

  const contentRef = useRef<HTMLDivElement>(null)

  const isMounted = useRef(false)

  const [{ left, top }, spring] = useSpring(() => ({
    left: 0,
    top: 0,
  }))

  const updatePos = useCallback(() => {
    const data = ref?.current?.getBoundingClientRect() || {}
    const { left: x, top: y, width, height } = data

    const left = x + width / 2
    const my = y
    const top = position === 'top' ? my : my + height

    spring.start({ left, top })
  }, [spring, ref, position])

  useEffect(() => {
    if (isMounted.current) {
      return
    }

    let timer: ReturnType<typeof setTimeout>

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

  const transition = useTransition(innerIsOpen, {
    from: { o: 0 },
    enter: { o: 1 },
    leave: { o: 0 },
    config: { tension: 250, clamp: true },
    onRest: () => !innerIsOpen && onClose(),
  })

  return (
    <BodyPortal>
      {transition(({ o }, item, _, key) =>
        item ? (
          <animated.div
            className={classes.popup({ side: position })}
            key={key}
            ref={contentRef}
            style={{
              opacity: o,
              transform: o.to((o) => trans(o, position)),
              left,
              top,
            }}
          >
            {children}
          </animated.div>
        ) : null
      )}
    </BodyPortal>
  )
})
