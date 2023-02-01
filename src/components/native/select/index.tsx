import React, { useRef, useState, MouseEvent } from 'react'

import useBGColor from '~/hook/useBgColor'

import items from './countries'
import List from './List'
import style from './select.module.scss'

const placeHolder = 'Choose country'

export const Select = () => {
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef<HTMLButtonElement>(null)

  useBGColor(220, 208, 220)

  const closeList = () => {
    setIsOpen(false)
    setSearch('')
    ref.current?.focus()
  }

  const onEscPress = (e: KeyboardEvent) => {
    if (e.keyCode === 27) {
      closeList()
    }
  }

  const openList = () => {
    setIsOpen(true)
  }

  const onChange = (value: string) => {
    setValue(value)
    closeList()
  }

  const toggleList = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    if (!isOpen) {
      openList()
    } else {
      closeList()
    }
  }

  const renderValue = () => {
    return value !== '' ? (
      <span>{value}</span>
    ) : (
      <span className={style.placeholder}>{placeHolder}</span>
    )
  }

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleList} ref={ref}>
        <span>{renderValue()}</span>
      </button>
      {isOpen && (
        <List
          onChange={onChange}
          onSearchChange={setSearch}
          items={items}
          search={search}
          closeList={closeList}
          onEscPress={onEscPress}
        />
      )}
    </div>
  )
}

export default Select
