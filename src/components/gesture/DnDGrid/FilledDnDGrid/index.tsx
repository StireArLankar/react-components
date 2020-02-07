import React, { useState, useCallback } from 'react'
import { LazyItem } from './LazyItem'
import useStyles from '../useStyles'
import { produce } from 'immer'

const arr: number[] = new Array(16).fill(0)

type IState = Array<[number, number]>

const getPos = ([x, y]: [number, number]) => y * 4 + x
const getXY = (pos: number): [number, number] => [pos % 4, Math.floor(pos / 4)]

const generateItems = (arr: number[]) => arr.map((_, index) => getXY(index))

export const FilledDnDGrid = () => {
  const classes = useStyles()

  const [items, setItems] = useState<IState>(generateItems(arr))

  const updateItemPosition = useCallback(
    (index: number, x: number, y: number) => {
      setItems((state) =>
        produce(state, (draft) => {
          // draft[index] = [x, y]
          const oldPos = getPos(draft[index])
          const newPos = getPos([x, y])

          if (oldPos === newPos) return

          // 1 --> 3
          state.forEach((item, i) => {
            const itemPos = getPos(item)
            // newPos > oldPos 1 --> 3
            if (itemPos > oldPos && itemPos <= newPos) {
              draft[i] = getXY(itemPos - 1)
            }
            // oldPos > newPos 1 <-- 3
            if (itemPos < oldPos && itemPos >= newPos) {
              draft[i] = getXY(itemPos + 1)
            }
          })

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
      <div key={index} className={classes.gridItem} />
    ))

  const renderItems = () =>
    items.map((item, index) => (
      <LazyItem
        key={index}
        index={index}
        step={100}
        max={3}
        position={item}
        updatePosition={updateItemPosition}
      />
    ))

  return (
    <div className={classes.grid}>
      {renderCells()}
      {renderItems()}
    </div>
  )
}
