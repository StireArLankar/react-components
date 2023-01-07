import React, { useState } from 'react'

import useBGColor from '~/hook/useBgColor'

import Fields from './Fields'
import { defaultFields as types, FieldType } from './fields.types'
import FieldsSelect from './FieldsSelect'
import style from './form.module.scss'
import TextDisplay from './TextDisplay'

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

  const addField =
    (name: 'text' | 'textarea' | 'select') => (e: React.MouseEvent) => {
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

  const removeField = (index: number) => (e: React.MouseEvent) => {
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
