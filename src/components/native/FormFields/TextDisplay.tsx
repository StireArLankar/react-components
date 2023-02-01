import React from 'react'

import { FieldType } from './fields.types'
import style from './form.module.scss'

interface TextDisplayProps {
  fields: FieldType[]
}

const TextDisplay = (props: TextDisplayProps) => {
  const { fields } = props
  return (
    <div>
      {fields.map((item) => (
        <div className={style.json} key={item.name}>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))}
    </div>
  )
}

export default TextDisplay
