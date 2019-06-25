import React, { useEffect, useState } from 'react'
import FieldsSelect from './FieldsSelect'
import Fields from './Fields'
import TextDisplay from './TextDisplay'

import style from './form.module.scss'
import types from './types'

const FormFields = () => {
  const [fields, setFields] = useState([])

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--bg-color', 'rgb(210, 208, 210)')
  }, [])

  const updateField = (index) => (value) => {
    const foundField = fields[index]
    const updatedField = { ...foundField, value }
    const updatedFields = [
      ...fields.slice(0, index),
      updatedField,
      ...fields.slice(index + 1)
    ]
    setFields(updatedFields)
  }

  const addField = (name) => (e) => {
    e.preventDefault()
    const { options } = types[name]
    const newField = { ...options, name: `${name}_${Date.now()}`, type: name, value: options.defaultValue }
    setFields([ ...fields, newField ])
  }

  const removeField = (index) => (e) => {
    e.preventDefault()
    const updatedFields = [
      ...fields.slice(0, index),
      ...fields.slice(index + 1)
    ]
    setFields(updatedFields)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.column}>
        <FieldsSelect addField={addField} />
        <Fields fields={fields} updateField={updateField} removeField={removeField}/>
      </div>
      <TextDisplay fields={fields} />
    </div>
  )
}

export default FormFields
