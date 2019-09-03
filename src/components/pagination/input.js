import React, { useState, useEffect } from 'react'

const Input = (props) => {
  const [ value, setValue ] = useState(0)

  useEffect(() => {
    setValue(props.value)
  }, [])

  useEffect(() => {
    const updateItems = () => props.setValue(value)

    const debounce = setTimeout(updateItems, 500)
    return () => { clearTimeout(debounce) }
  }, [value])

  const onItemsChange = (e) => {
    const value = +e.target.value
    if (!isNaN(value) && Number.isInteger(value)) {
      setValue(value)
    }
  }

  return (
    <p>
      <label htmlFor={props.title} style={{marginRight: '10px'}}>{props.title}</label>
      <input id={props.title} type='text' value={value} onChange={onItemsChange}/>
    </p>
  )
}

export default Input
