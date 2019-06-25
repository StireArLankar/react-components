export default {
  text: {
    name: 'text',
    label: 'Text input',
    options: {
      defaultValue: '',
      placeholder: 'Placeholder',
      label: 'Text label'
    }
  },
  textarea: {
    name: 'textarea',
    label: 'Textarea',
    options: {
      defaultValue: '',
      placeholder: 'Another placeholder',
      label: 'Textarea label'
    }
  },
  select: {
    name: 'select',
    label: 'Select',
    options: {
      defaultValue: 'test1',
      label: 'Select label',
      data: [
        'test1',
        'test2'
      ]
    }
  }
}