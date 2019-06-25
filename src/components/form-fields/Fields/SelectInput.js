import React from 'react'

const SelectInput = (props) => {
  const onChange = (e) => {
    const { value } = e.target
    props.onChange(value)
  }

  return (
    <select onChange={onChange} value={props.value}>
      {props.data.map((item) => (
        <option value={item} key={item}>{item}</option>
      ))}
    </select>
  )
}

export default SelectInput
