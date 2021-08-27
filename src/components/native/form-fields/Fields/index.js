import React from 'react'

import classes from './fields.module.scss'
import SelectInput from './SelectInput'
import TextareaInput from './TextareaInput'
import TextInput from './TextInput'

const mapper = {
  text: (props, onChange) => <TextInput {...props} onChange={onChange} />,
  textarea: (props, onChange) => (
    <TextareaInput {...props} onChange={onChange} />
  ),
  select: (props, onChange) => <SelectInput {...props} onChange={onChange} />,
}

const Fields = (props) => {
  const renderFields = () => {
    return props.fields.map((field, index) => (
      <div className={classes.field} key={field.name}>
        <p className={classes.label}>
          <label htmlFor={field.name}>{field.label}</label>
          <button type='button' onClick={props.removeField(index)}>
            X
          </button>
        </p>
        {mapper[field.type](field, props.updateField(index))}
      </div>
    ))
  }

  return <div className={classes.wrapper}>{renderFields()}</div>
}

export default Fields
