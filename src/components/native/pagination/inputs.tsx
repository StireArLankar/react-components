import React from 'react'
import Input from './input'

import style from './pagination.module.scss'

interface InputsProps {
  items: number
  setItems: (num: number) => void
  itemsPerPage: number
  setItemsPerPage: (num: number) => void
}

const Inputs = (props: InputsProps) => {
  const { items, setItems, itemsPerPage, setItemsPerPage } = props

  return (
    <div className={style.bar}>
      <Input value={items} setValue={setItems} title='Items' />
      <Input value={itemsPerPage} setValue={setItemsPerPage} title='Items Per Page' />
    </div>
  )
}

export default Inputs
