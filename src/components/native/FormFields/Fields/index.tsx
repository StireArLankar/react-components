import React from 'react'

import classes from './fields.module.scss'
import SelectInput, { SelectInputProps } from './SelectInput'
import TextareaInput, { TextareaInputProps } from './TextareaInput'
import TextInput, { TextInputProps } from './TextInput'

const mapper = {
  text: (
    props: Omit<TextInputProps, 'onChange'>,
    onChange: (val: string) => void
  ) => <TextInput {...props} onChange={onChange} />,
  textarea: (
    props: Omit<TextareaInputProps, 'onChange'>,
    onChange: (val: string) => void
  ) => <TextareaInput {...props} onChange={onChange} />,
  select: (
    props: Omit<SelectInputProps, 'onChange'>,
    onChange: (val: string) => void
  ) => <SelectInput {...props} onChange={onChange} />,
}

const mapper1 = (
  item: Props['fields'][number],
  onChange: (val: string) => void
) => {
  switch (item.type) {
    case 'text':
      return mapper[item.type](item, onChange)
    case 'textarea':
      return mapper[item.type](item, onChange)
    case 'select':
      return mapper[item.type](item, onChange)
  }
}

type Props = {
  fields: Array<
    | (Omit<TextInputProps, 'onChange'> & { type: 'text' })
    | (Omit<TextareaInputProps, 'onChange'> & { type: 'textarea' })
    | (Omit<SelectInputProps, 'onChange'> & { type: 'select' })
  >
  removeField: (index: number) => (e: React.MouseEvent) => void
  updateField: (index: number) => (val: string) => void
}

const Fields = (props: Props) => {
  const renderFields = () =>
    props.fields.map((field, index) => (
      <div className={classes.field} key={field.name}>
        <p className={classes.label}>
          <label htmlFor={field.name}>{field.label}</label>
          <button type='button' onClick={props.removeField(index)}>
            X
          </button>
        </p>
        {mapper1(field, props.updateField(index))}
      </div>
    ))

  return <div className={classes.wrapper}>{renderFields()}</div>
}

export default Fields
