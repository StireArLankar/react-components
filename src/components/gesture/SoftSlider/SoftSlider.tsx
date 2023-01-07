import React, { useRef, useEffect, useMemo, useCallback } from 'react'
import useMeasure from 'react-use-measure'

import { useSprings, animated, SpringConfig, to } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export interface SliderProps extends DefaultProps {
  children: React.ReactNode[]
  index: number
  onIndexChange: (newIndex: number) => void
  className?: string
  style?: React.CSSProperties
  slideClassName?: string
  slideStyle?: React.CSSProperties | ((index: number) => React.CSSProperties)
  onDragStart?: (pressedIndex: number) => void
  onDragEnd?: (pressedIndex: number) => void
  onTap?: (pressedIndex: number) => void
}

type DefaultProps = typeof defaultProps

const defaultProps = {
  enabled: true,
  vertical: false,
  slideAlign: 'center',
  draggedScale: 1,
  draggedSpring: { tension: 1200, friction: 40 } as SpringConfig,
  releaseSpring: { tension: 120, friction: 30 } as SpringConfig,
}

// style for the slides wrapper
const slidesWrapperStyle = (vertical: boolean): React.CSSProperties => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'stretch',
  position: 'relative',
  userSelect: 'none',
  flexDirection: vertical ? 'column' : 'row',
  touchAction: vertical ? 'pan-x' : 'pan-y',
})

const clamp = (num: number, clamp: number, higher: number) =>
  Math.min(Math.max(num, clamp), higher)

export const Slider = ({
  children,
  index,
  onIndexChange,
  className,
  style,
  slideStyle,
  slideClassName,
  enabled,
  vertical,
  slideAlign,
  draggedScale,
  draggedSpring,
  releaseSpring,
  onDragStart,
  onDragEnd,
  onTap,
}: SliderProps) => {
  const slideStyleFunc = useMemo(
    () => (typeof slideStyle === 'function' ? slideStyle : () => slideStyle),
    [slideStyle]
  )

  const root = useRef<HTMLInputElement>(null)
  const [ref, { width, height }] = useMeasure({ debounce: 100 })
  ref(root.current)

  const axis = vertical ? 'y' : 'x'

  const getVal = useCallback(
    (tuple: [number, number]) => (vertical ? tuple[1] : tuple[0]),
    [vertical]
  )

  const size = vertical ? height : width

  const [minIndex, maxIndex] = [0, children.length - 1]

  const indexRef = useRef(index)

  const restPos = useRef(0)

  const [springs, set] = useSprings(children.length, () => ({
    x: 0,
    y: 0,
    s: 1,
    zIndex: 0,
    immediate: (key) => key === 'zIndex',
  }))

  useEffect(() => {
    if (!width || !height) {
      return
    }

    if (axis === 'y') {
      const { offsetTop, offsetHeight } = root.current!.children[
        index
      ] as HTMLElement
      restPos.current = Math.round(-offsetTop + (height - offsetHeight) / 2)
    } else {
      const { offsetLeft, offsetWidth } = root.current!.children[
        index
      ] as HTMLElement
      restPos.current = Math.round(-offsetLeft + (width - offsetWidth) / 2)
    }

    set.start(() => ({
      [axis]: restPos.current,
      s: 1,
      config: releaseSpring,
    }))

    indexRef.current = index
  }, [index, set, axis, height, width, releaseSpring])

  const bind = useDrag(
    ({
      first,
      last,
      tap,
      swipe,
      movement,
      args: [pressedIndex],
      memo = springs[pressedIndex][axis].get(),
    }) => {
      if (tap) {
        onTap && onTap(pressedIndex)
        return
      }

      const mov = getVal(movement)

      first && onDragStart && onDragStart(pressedIndex)

      if (last) {
        const swipeAxis = swipe ? getVal(swipe) : 0

        if (Math.abs(mov) > size! / 2 || swipeAxis !== 0) {
          indexRef.current = clamp(
            indexRef.current - Math.sign(mov),
            minIndex,
            maxIndex
          )
        }

        if (index !== indexRef.current) {
          requestAnimationFrame(() => onIndexChange(indexRef.current))
        } else {
          set.start(() => ({
            [axis]: restPos.current,
            s: 1,
            config: releaseSpring,
          }))
        }

        onDragEnd && onDragEnd(pressedIndex)
      } else {
        set.start((i) => ({
          [axis]: mov + memo,
          s: draggedScale,
          config: draggedSpring,
          zIndex: i === pressedIndex ? 10 : 0,
        }))
      }

      return memo
    },
    { enabled, axis, filterTaps: true }
  )

  const rootStyle = slidesWrapperStyle(vertical)
  if (!className) {
    rootStyle.width = '100%'
  }

  return (
    <div ref={root} className={className} style={{ ...rootStyle, ...style }}>
      {springs.map((styles, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          className={slideClassName}
          style={{
            [vertical ? 'justifyContent' : 'alignItems']: slideAlign,
            display: 'flex',
            ...slideStyleFunc(i),
            zIndex: styles.zIndex.to((val) => val.toFixed(0)),
            transform: to(
              [styles[axis], styles.s],
              (x, s) => `translate${axis.toUpperCase()}(${x}px) scale(${s})`
            ),
            willChange: 'transform',
            touchAction: 'none',
          }}
        >
          {children[i]}
        </animated.div>
      ))}
    </div>
  )
}

Slider.defaultProps = defaultProps
