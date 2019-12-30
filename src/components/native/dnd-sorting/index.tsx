import React, { useState, useRef, DragEvent } from 'react'
import style from './dnd.module.scss'
import { ReactComponent as Hamburger } from './hamburger.svg'
import useBGColor from '../../../hook/useBgColor'

const initialItems = ['🍰 Cake', '🍩 Donut', '🍎 Apple', '🍕 Pizza']

const DnDSorting = () => {
  const [items, setItems] = useState(initialItems)
  useBGColor(220, 208, 233)
  const draggedItem = useRef<string | null>(null)

  const onDragStart = (index: number) => (evt: DragEvent<HTMLDivElement>) => {
    draggedItem.current = items[index]

    if (evt.dataTransfer) {
      const parent = (evt.target as any).parentNode
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('text/html', parent)
      evt.dataTransfer.setDragImage(parent, 20, 20)
    }
  }

  const onDragOver = (index: number) => () => {
    const draggedOverItem = items[index]
    if (draggedItem.current === draggedOverItem) return

    const arr = items.filter((item) => item !== draggedItem.current)

    const newItems = [...arr.slice(0, index), draggedItem.current as string, ...arr.slice(index)]

    setItems(newItems)
  }

  const onDragEnd = () => {
    draggedItem.current = null
  }

  const renderItems = () =>
    items.map((item, index) => (
      <li key={item} className={style.item} onDragOver={onDragOver(index)}>
        <div
          className={style.handler}
          draggable
          onDragStart={onDragStart(index)}
          onDragEnd={onDragEnd}
        >
          <Hamburger className={style.svg} />
        </div>
        <span className={style.content}>{item}</span>
      </li>
    ))

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h3>List of items</h3>
        <ul className={style.list}>{renderItems()}</ul>
      </div>
    </div>
  )
}

export default DnDSorting
