import React, { Fragment, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import useMeasure from 'react-use-measure'

import { ReactComponent as Filter } from './filter.svg'
import useStyles from './useStyles'

const trans = (y: number, c: number) =>
  `translateX(-50%) rotate(45deg) skew(${y * c}deg, ${y * c}deg)`

/** лимиты для макс смещения по оси y при открытой модалке */
const dragOptions1 = {
  bounds: {
    top: -15,
    bottom: 50,
  },
}

/** лимиты для макс смещения по оси y при закрытой модалке */
const dragOptions2 = {
  bounds: {
    top: -65,
    bottom: 20,
  },
}

export default ({ children }: React.PropsWithChildren<{}>) => {
  const [{ y, y2 }, set] = useSpring(() => ({ y: 0, y2: -20 }))

  const [isOpen, setIsOpen] = useState(false)

  const classes = useStyles()

  const [ref, { height }] = useMeasure()

  const dragOptions = isOpen ? dragOptions1 : dragOptions2

  const bind = useDrag(({ movement: [, y], down }) => {
    switch (true) {
      // если палец / мышка нажаты
      case down:
        // если открыта, то считаем y возле верхнего края
        // если закрыта, то у нижнего
        set({ y: isOpen ? height - y : -y, y2: -y - 20 })
        break

      // когда отжимается палец:

      // модалка развернута и смещение вниз больше 30
      // закрываем модалку
      case isOpen === true && y > 30:
        setIsOpen(false)
        set({ y: 0, y2: -20 })
        break

      // модалка развернута и смещения недостаточно
      // оставляем модалку раскрытой
      case isOpen === true:
        set({ y: height, y2: -20 })
        break

      // модалка закрыта и смещение вверх больше 30
      // открываем модалку
      case isOpen === false && y < -30:
        setIsOpen(true)
        set({ y: height, y2: -20 })
        break

      // модалка закрыта и смещения недостаточно
      // оставляем модалку закрытой
      case isOpen === false:
        set({ y: 0, y2: -20 })
        break
    }
  }, dragOptions)

  return (
    <>
      <Filter style={{ display: 'none' }} />
      <animated.div
        className={classes.wrapper}
        style={{
          top: '100%',
          ['--bg' as any]: 'white',
          transform: y.to((y) => `translate(-50%, ${-y + 30}px)`),
        }}
      >
        <div className={classes.wrapperFilter}>
          <animated.div
            className={classes.box}
            style={{ transform: y2.to((y) => trans(y, 0.3)) }}
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
                set({ y: 0, y2: -20 })
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
