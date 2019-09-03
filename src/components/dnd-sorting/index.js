import React, { useState, useRef } from 'react'
import useBGColor from '../../hook/useBGColor'
import style from './dnd.module.scss'
import { ReactComponent as Hamburger } from './hamburger.svg'

const initialItems = ['🍰 Cake', '🍩 Donut', '🍎 Apple', '🍕 Pizza']

const DnDSorting = (props) => {
  const [items, setItems] = useState(initialItems)
  useBGColor(220, 208, 233)
  const draggedItem = useRef(null)

  const onDragStart = (index) => (evt) => {
    draggedItem.current = items[index]
    evt.dataTransfer.effectAllowed = 'move'
    evt.dataTransfer.setData('text/html', evt.target.parentNode)
    evt.dataTransfer.setDragImage(evt.target.parentNode, 20, 20)
  }

  const onDragOver = (index) => (evt) => {
    const draggedOverItem = items[index]
    if (draggedItem.current === draggedOverItem) return

    const arr = items.filter(item => item !== draggedItem.current)
    const newItems = [
      ...arr.slice(0, index),
      draggedItem.current,
      ...arr.slice(index)
    ]

    setItems(newItems)
  }

  const onDragEnd = () => {
    draggedItem.current = null
  }

  const renderItems = () => (
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
  )

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h3>List of items</h3>
        <ul className={style.list}>
          {renderItems()}
        </ul>
      </div>
    </div>
  )
}

export default DnDSorting
