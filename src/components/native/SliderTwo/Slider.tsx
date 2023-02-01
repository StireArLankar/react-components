import React, { useState, useRef } from 'react'

import style from './slider.module.scss'

type Props = {
  width: number
  components: React.ReactNode[]
}

const Slider = (props: Props) => {
  const [transform, setTransform] = useState(0)
  const ref = useRef<HTMLUListElement>(null)

  const moveIt =
    (move: 'touchmove' | 'mousemove', up: 'touchend' | 'mouseup') =>
    (evt: React.MouseEvent | React.TouchEvent) => {
      if (evt.type === 'mousedown' && 'buttons' in evt && evt.buttons !== 1) {
        return
      }

      if (evt.type === 'mousedown') {
        evt.preventDefault()
      }

      const list = ref.current

      if (!list) {
        return
      }

      const startX = 'touches' in evt ? evt.touches[0].clientX : evt.clientX
      const width = list.offsetWidth
      const length =
        list.children.length * width - (list.parentNode as any).offsetWidth

      let diff = 0
      list.style.transition = ``

      const onMove = (moveEvt: MouseEvent | TouchEvent) => {
        const x =
          'touches' in moveEvt ? moveEvt.touches[0].clientX : moveEvt.clientX

        diff = startX - x
        const temp = transform + diff
        list.style.transform =
          temp > length ? `translateX(-${length}px)` : `translateX(-${temp}px)`
      }

      const onUp = () => {
        document.removeEventListener(move, onMove)
        document.removeEventListener(up, onUp)
        const temp = transform + diff
        let newTransform = temp > length ? length : temp < 0 ? 0 : temp
        const limit = Math.round(newTransform / width)
        newTransform = width * limit
        list.style.transition = `transform 0.3s cubic-bezier(0.28, 0.82, 0.4, 0.82)`
        list.style.transform = `translateX(-${newTransform}px)`
        setTransform(newTransform)
      }

      document.addEventListener(move, onMove)
      document.addEventListener(up, onUp)
    }

  const onTouchStart = moveIt('touchmove', 'touchend')
  const onMouseDown = moveIt('mousemove', 'mouseup')

  return (
    <div
      className={style.window}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <ul className={style.list} ref={ref} style={{ width: props.width + '%' }}>
        {props.components.map((component, index) => (
          <li key={index} className={style.item}>
            {component}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Slider
