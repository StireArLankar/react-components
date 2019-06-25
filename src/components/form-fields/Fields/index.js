import React from 'react'
import TextInput from './TextInput'
import TextareaInput from './TextareaInput'
import SelectInput from './SelectInput'

import styles from './fields.module.scss'

const mapper = {
  'text': (props, onChange) => <TextInput {...props} onChange={onChange} />,
  'textarea': (props, onChange) => <TextareaInput {...props} onChange={onChange} />,
  'select': (props, onChange) => <SelectInput {...props} onChange={onChange} />,
}

const Fields = (props) => {
  const renderFields = () => {
    return props.fields.map((field, index) => (
      <div className={styles.field}>
        <p className={styles.label}>
          <label htmlFor={field.name}>{field.label}</label>
          <button type='button' onClick={props.removeField(index)}>X</button>
        </p>
        {mapper[field.type](field, props.updateField(index))}
      </div>
    ))
  }

  return (
    <div className={styles.wrapper}>
      {renderFields()}
    </div>
  )
}

export default Fields
