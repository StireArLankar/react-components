import React, { useState, useCallback } from 'react'

import { produce } from 'immer'

import classes from './classes'
import { ConnectedItem } from './ConnectedItem'

const arr: number[] = new Array(16).fill(0)

type IState = Array<[number, number]>

export const StatefulDnDGrid = () => {
  const [items, setItems] = useState<IState>(() => [
    [0, 0],
    [1, 2],
    [2, 2],
    [1, 2],
    [1, 2],
    [3, 2],
  ])

  const updateItemPosition = useCallback(
    (index: number, x: number, y: number) => {
      setItems((state) =>
        produce(state, (draft) => {
          draft[index] = [x, y]
        })
      )
    },
    []
  )

  const counts = items.reduce(
    (acc, cur) => {
      const index = cur[0] + cur[1] * 4
      acc[index]++
      return acc
    },
    [...arr]
  )

  const renderCells = () =>
    counts.map((count, index) => (
      <div key={index} className={classes.gridItem()}>
        <span className={classes.count()}>{count > 0 ? count : null}</span>
      </div>
    ))

  const renderItems = () =>
    items.map((item, index) => (
      <ConnectedItem
        key={index}
        index={index}
        step={100}
        max={3}
        position={item}
        updatePosition={updateItemPosition}
      />
    ))

  return (
    <div className={classes.grid()}>
      {renderCells()}
      {renderItems()}
    </div>
  )
}
