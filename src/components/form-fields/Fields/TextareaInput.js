import React from 'react'

import styles from './fields.module.scss'

const TextareaInput = (props) => {
  const onChange = (e) => {
    const { value } = e.target
    props.onChange(value)
  }
  
  return (
    <textarea
      type='text'
      name={props.name}
      id={props.name}
      value={props.value}
      onChange={onChange}
      placeholder={props.placeholder}
      className={styles.textarea}
      rows={4}
    />
  )
}

export default TextareaInput
