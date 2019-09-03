import React, { useRef, useState } from 'react'
import useBGColor from '../../hook/useBGColor'
import List from './list'

import items from './countries';
import style from './select.module.scss'

const placeHolder = 'Choose country'

const Select = props => {
  const [ value, setValue ] = useState('')
  const [ isOpen, setIsOpen ] = useState(false)
  const [ search, setSearch ] = useState('')
  const ref = useRef()

  useBGColor(220, 208, 220)

  const closeList = () => {
    setIsOpen(false)
    setSearch('')
    ref.current.focus()
  }

  const onEscPress = (e) => {
    if (e.keyCode === 27) {
      closeList()
    }
  }

  const openList = () => {
    setIsOpen(true)
  }

  const onChange = (value) => {
    setValue(value)
    closeList()
  }

  const toggleList = (e) => {
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
    return value !== ''
      ? <span>{value}</span>
      : <span className={style.placeholder}>{placeHolder}</span>
  }

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleList} ref={ref}>
        <span>{renderValue()}</span>
      </button>
      { isOpen &&
      <List
        onChange={onChange}
        onSearchChange={setSearch}
        items={items}
        search={search}
        closeList={closeList}
        onEscPress={onEscPress}
      /> }
    </div>
  )
}

export default Select
