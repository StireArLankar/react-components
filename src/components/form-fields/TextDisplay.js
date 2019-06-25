import React from 'react'

import style from './form.module.scss'

const TextDisplay = (props) => {
  return (
    <div>
      {props.fields.map(item => <div className={style.json}><pre>{JSON.stringify(item, null, 2)}</pre></div>)}
    </div>
  )
}

export default TextDisplay
