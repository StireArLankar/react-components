import React from 'react'

import types from './fields.types'
import style from './form.module.scss'

const FieldsSelect = (props: any) => {
  const renderButtons = () => {
    return Object.values(types).map((type) => (
      <li key={type.name}>
        <button type='button' onClick={props.addField(type.name)}>
          {type.label}
        </button>
      </li>
    ))
  }

  return <ul className={style.list}>{renderButtons()}</ul>
}

export default FieldsSelect
