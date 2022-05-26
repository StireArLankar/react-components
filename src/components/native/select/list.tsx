import React, { useEffect, useRef, MouseEvent, ChangeEvent } from 'react'

import style from './select.module.scss'

interface ListProps {
  onChange: (item: string) => void
  onSearchChange: (arg: string) => void
  items: string[]
  search: string
  closeList: () => void
  onEscPress: (evt: KeyboardEvent) => void
}

const List = (props: ListProps) => {
  const { search, closeList, items, onChange, onEscPress, onSearchChange } =
    props
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = 0
    }

    document.addEventListener('click', closeList)
    document.addEventListener('keydown', onEscPress)
    return () => {
      document.removeEventListener('click', closeList)
      document.removeEventListener('keydown', onEscPress)
    }
  }, [closeList, onEscPress])

  const ref = useRef<HTMLUListElement>(null)

  const renderItems = () => {
    const lowerSearch = search.toLowerCase()
    const array = items.filter((item) => {
      const temp = item.toLowerCase().includes(lowerSearch)
      return temp
    })

    return array.map((item) => {
      const onItemClick = (e: MouseEvent) => {
        e.preventDefault()
        onChange(item)
      }

      const onEnterClick = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
          e.preventDefault()
          onChange(item)
        }
      }

      return (
        <li
          key={item}
          onClick={onItemClick}
          onKeyDown={onEnterClick}
          className={style.item}
          tabIndex={0}
        >
          {item}
        </li>
      )
    })
  }

  const onListClick = (e: MouseEvent) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  return (
    <ul
      className={style.list + ' custom-scroll'}
      onClick={onListClick}
      ref={ref}
    >
      <li className={style.inputWrapper}>
        <input
          type='text'
          value={search}
          onChange={onInputChange}
          className={style.input}
          onKeyDown={onKeyDown}
          autoFocus
        />
      </li>
      {renderItems()}
    </ul>
  )
}

export default List
