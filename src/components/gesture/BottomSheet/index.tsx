import React, { useState } from 'react'
import useMeasure from 'react-use-measure'

import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import classes, { backgroundVar } from './_classes.css'
import { ReactComponent as Filter } from './filter.svg'

const trans = (y: number, c: number) =>
  `translateX(-50%) rotate(45deg) skew(${y * c}deg, ${y * c}deg)`

/** лимиты для макс смещения по оси y при открытой модалке */
const dragOptions1 = {
  bounds: { top: -15, bottom: 50 },
}

/** лимиты для макс смещения по оси y при закрытой модалке */
const dragOptions2 = {
  bounds: { top: -65, bottom: 20 },
}

const initialState = { y: 0, y2: -20 }

export default ({ children }: React.PropsWithChildren<{}>) => {
  const [{ y, y2 }, spring] = useSpring(() => initialState)

  const [isOpen, setIsOpen] = useState(false)

  const [ref, { height }] = useMeasure()

  const dragOptions = isOpen ? dragOptions1 : dragOptions2

  const bind = useDrag(
    ({ movement: [, y], down }) => {
      switch (true) {
        // если палец / мышка нажаты
        case down:
          // если открыта, то считаем y возле верхнего края
          // если закрыта, то у нижнего
          spring.start({ y: isOpen ? height - y : -y, y2: -y - 20 })
          break

        // когда отжимается палец:

        // модалка развернута и смещение вниз больше 30
        // закрываем модалку
        case isOpen === true && y > 30:
          setIsOpen(false)
          spring.start(initialState)
          break

        // модалка развернута и смещения недостаточно
        // оставляем модалку раскрытой
        case isOpen === true:
          spring.start({ y: height, y2: -20 })
          break

        // модалка закрыта и смещение вверх больше 30
        // открываем модалку
        case isOpen === false && y < -30:
          setIsOpen(true)
          spring.start({ y: height, y2: -20 })
          break

        // модалка закрыта и смещения недостаточно
        // оставляем модалку закрытой
        case isOpen === false:
          spring.start(initialState)
          break
      }
    },
    {
      bounds: dragOptions.bounds,
      from: () => [y.get(), 0],
    }
  )

  return (
    <>
      <Filter style={{ display: 'none' }} />
      <animated.div
        className={classes.wrapper}
        style={{
          ...assignInlineVars({ [backgroundVar]: 'white' }),
          top: '100%',
          transform: y.to((y) => `translate(-50%, ${-y + 30}px)`),
        }}
      >
        <div className={classes.wrapperFilter}>
          <animated.div
            className={classes.box}
            style={{
              transform: y2.to((y) => trans(y, 0.3)),
              touchAction: 'none',
            }}
            {...bind()}
          />
          <animated.div className={classes.planc} style={{ height: '100%' }} />
        </div>
        <div
          ref={ref}
          style={{
            maxHeight: 'calc(100vh - 80px)',
            position: 'relative',
            padding: `15px 20px 35px`,
            display: 'flex',
            background: 'white',
            borderRadius: 20,
          }}
        >
          <div
            style={{
              overflowY: 'auto',
              width: '100%',
            }}
          >
            <button
              onClick={() => {
                setIsOpen(false)
                spring.start(initialState)
              }}
            >
              close
            </button>
            {children}
          </div>
        </div>
      </animated.div>
    </>
  )
}
