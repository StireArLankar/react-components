import React, { useState, MouseEvent } from 'react'
import useBGColor from 'hook/useBgColor'

import FieldsSelect from './FieldsSelect'
import Fields from './Fields'
import TextDisplay from './TextDisplay'
import style from './form.module.scss'
import { defaultFields as types, FieldType } from './fields.types'

export const FormFields = () => {
  const [fields, setFields] = useState<FieldType[]>([])

  useBGColor(210, 208, 210)

  const updateField = (index: number) => (value: any) => {
    const foundField = fields[index]
    const updatedField = { ...foundField, value }
    const updatedFields = [
      ...fields.slice(0, index),
      updatedField,
      ...fields.slice(index + 1),
    ]
    setFields(updatedFields)
  }

  const addField = (name: 'text' | 'textarea' | 'select') => (
    e: MouseEvent
  ) => {
    e.preventDefault()
    const { options } = types[name]
    const newField: any = {
      options,
      name: `${name}_${Date.now()}`,
      type: name,
      value: options.defaultValue,
    }
    setFields([...fields, newField])
  }

  const removeField = (index: number) => (e: MouseEvent) => {
    e.preventDefault()
    const updatedFields = [
      ...fields.slice(0, index),
      ...fields.slice(index + 1),
    ]
    setFields(updatedFields)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.column}>
        <FieldsSelect addField={addField} />
        <Fields
          fields={fields}
          updateField={updateField}
          removeField={removeField}
        />
      </div>
      <TextDisplay fields={fields} />
    </div>
  )
}

export default FormFields
