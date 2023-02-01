import React from 'react'

import { TextAreaField } from '../fields.types'

import classes from './fields.module.scss'

export type TextareaInputProps = TextAreaField & {
  onChange: (value: string) => void
}

const TextareaInput = (props: TextareaInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    props.onChange(value)
  }

  return (
    <textarea
      name={props.name}
      id={props.name}
      value={props.value}
      onChange={onChange}
      placeholder={props.options.placeholder}
      className={classes.textarea}
      rows={4}
    />
  )
}

export default TextareaInput
