import React from 'react'

const TextInput = (props) => {
  const onChange = (e) => {
    const { value } = e.target
    props.onChange(value)
  }

  return (
    <input
      type='text'
      name={props.name}
      id={props.name}
      value={props.value}
      onChange={onChange}
      placeholder={props.placeholder}
    />
  )
}

export default TextInput
