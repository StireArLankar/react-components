import React from 'react'

import classes from './classes'
import { Item } from './Item'

const arr = new Array(16).fill('')

export const DnDGrid = () => {
  const renderCells = () =>
    arr.map((_, index) => <div key={index} className={classes.gridItem()} />)

  return (
    <div className={classes.grid()}>
      {renderCells()}
      <Item index={0} step={100} max={4 - 1} />
      <Item index={1} step={100} max={4 - 1} />
    </div>
  )
}
