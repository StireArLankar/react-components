import React, { useEffect } from 'react'

import style from './select.module.scss'

const List = props => {
  useEffect(() => {
    ref.current.scrollTop = 0
    document.addEventListener('click', props.closeList)
    document.addEventListener('keydown', props.onEscPress)
    return () => {
      document.removeEventListener('click', props.closeList)
      document.removeEventListener('keydown', props.onEscPress)
    }
  }, [])

  const ref = React.createRef()

  const renderItems = () => {
    const search = props.search.toLowerCase()
    const items = props.items.filter(item => {
      const temp = item.toLowerCase().includes(search)
      return temp
    })
    return items.map(item => {
      const onItemClick = (e) => {
        e.preventDefault()
        props.onChange(item)
      }

      const onEnterClick = (e) => {
        if (e.keyCode === 13) {
          e.preventDefault()
          props.onChange(item)
        }
      }

      return (
        <li
          key={item}
          onClick={onItemClick}
          onKeyDown={onEnterClick}
          className={style.item}
          tabIndex={ 0 }
        >
          {item}
        </li>
      )
    })
  }

  const onListClick = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  const onInputChange = (e) => {
    props.onSearchChange(e.target.value)
  }

  const onKeyDown = (e) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  return (
    <ul className={style.list + ' custom-scroll'} onClick={onListClick} ref={ref}>
      <li className={style.inputWrapper}>
        <input
          type='text'
          value={props.search}
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
