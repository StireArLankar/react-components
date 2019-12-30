interface BaseField {
  value: string
  name: string
  label: string
  options: {
    defaultValue: string
    label: string
  }
}

export interface TextField extends BaseField {
  options: {
    defaultValue: string
    placeholder: string
    label: string
  }
  type: 'text'
}

export interface TextAreaField extends BaseField {
  options: {
    defaultValue: string
    placeholder: string
    label: string
  }
  type: 'textarea'
}

export interface SelectField extends BaseField {
  options: {
    defaultValue: string
    label: string
    data: string[]
  }
  type: 'select'
}

export type FieldType = TextField | TextAreaField | SelectField

const text: TextField = {
  value: '',
  name: 'text',
  label: 'Text input',
  options: {
    defaultValue: '',
    placeholder: 'Placeholder',
    label: 'Text label'
  },
  type: 'text'
}

const textarea: TextAreaField = {
  value: '',
  name: 'textarea',
  label: 'Textarea',
  options: {
    defaultValue: '',
    placeholder: 'Another placeholder',
    label: 'Textarea label'
  },
  type: 'textarea'
}

const select: SelectField = {
  value: 'test1',
  name: 'select',
  label: 'Select',
  options: {
    defaultValue: 'test1',
    label: 'Select label',
    data: ['test1', 'test2']
  },
  type: 'select'
}

export const defaultFields = {
  text,
  textarea,
  select
}

export default defaultFields
