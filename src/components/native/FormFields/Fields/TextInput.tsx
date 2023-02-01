import React from 'react'

import { TextField } from '../fields.types'

export type TextInputProps = TextField & {
  onChange: (value: string) => void
}

const TextInput = (props: TextInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      placeholder={props.options.placeholder}
    />
  )
}

export default TextInput
