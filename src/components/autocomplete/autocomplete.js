import React, { useState } from 'react'
import style from './autocomplete.module.scss'

const AutoComplete = (props) => {
  const [value, setValue] = useState('')
  const [suggestion, setSuggestion] = useState([])

  const onTextInput = (evt) => {
    const value = evt.target.value
    setValue(value)
    if (value.length > 0) {
      const reg = new RegExp(`^${value}`, `i`)
      const reg2 = new RegExp(`^${value}$`, `i`)
      const it = props.items.filter(v => reg.test(v)).filter(v => !reg2.test(v))
      setSuggestion(it)
    } else {
      setSuggestion([])
    }
  }

  const onItemClick = (value) => (e) => {
    e.preventDefault()
    setValue(value)
    setSuggestion([])
  }

  const renderList = () => {
    if (suggestion.length === 0) return null

    return (
      <ul className={style.list}>
        {suggestion.map(item => (
          <li className={style.item} onClick={onItemClick(item)}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className={style.wrapper}>
      <input
        type='text'
        className={style.input}
        onChange={onTextInput}
        value={value}
      />
      {renderList()}
    </div>
  )
}

export default AutoComplete
