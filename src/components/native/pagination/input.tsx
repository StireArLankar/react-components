import React, { useState, useEffect, ChangeEvent } from 'react'

interface InputProps {
  value: number
  setValue: (num: number) => void
  title: string
}

const Input = (props: InputProps) => {
  const { value, setValue, title } = props
  const [state, setState] = useState(0)

  useEffect(() => {
    setState(value)
  }, [value])

  useEffect(() => {
    const updateItems = () => setValue(state)
    const debounce = setTimeout(updateItems, 500)

    return () => clearTimeout(debounce)
  }, [state, setValue])

  const onItemsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value
    if (!isNaN(value) && Number.isInteger(value)) {
      setState(value)
    }
  }

  return (
    <p>
      <label htmlFor={title} style={{ marginRight: '10px' }}>
        {title}
      </label>
      <input id={title} type='text' value={state} onChange={onItemsChange} />
    </p>
  )
}

export default Input
