import React from 'react'
import Input from './input'

import style from './pagination.module.scss'

const Inputs = (props) => {
  return (
    <div className={style.bar}>
      <Input value={props.items} setValue={props.setItems} title='Items' />
      <Input value={props.itemsPerPage} setValue={props.setItemsPerPage} title='Items Per Page'/>
    </div>
  )
}

export default Inputs
