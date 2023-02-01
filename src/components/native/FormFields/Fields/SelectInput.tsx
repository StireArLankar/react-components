import React from 'react'

import { SelectField } from '../fields.types'

export type SelectInputProps = SelectField & {
  onChange: (value: string) => void
}

const SelectInput = (props: SelectInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    props.onChange(value)
  }

  return (
    <select onChange={onChange} value={props.value}>
      {props.options.data.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
