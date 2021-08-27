import React, { useState, useCallback, useMemo } from 'react'

import { produce } from 'immer'

import useStyles from '../useStyles'

import { Item } from './Item'
import { LazyItem } from './LazyItem'

const MAGIC = 4

const arr: number[] = new Array(MAGIC * MAGIC).fill(0)

type IState = Array<[number, number]>

const getPos = ([x, y]: [number, number]) => y * MAGIC + x
const getXY = (pos: number): [number, number] => [
  pos % MAGIC,
  Math.floor(pos / MAGIC),
]

const generateItems = (arr: number[]) => arr.map((_, index) => getXY(index))

export interface FilledDnDGridProps {
  lazy?: boolean
}

export const FilledDnDGrid = (props: FilledDnDGridProps) => {
  const { lazy } = props
  const classes = useStyles()

  const [items, setItems] = useState<IState>(generateItems(arr))

  const updateItemPosition = useCallback(
    (index: number, x: number, y: number) => {
      setItems((state) =>
        produce(state, (draft) => {
          const oldPos = getPos(draft[index])
          const newPos = getPos([x, y])

          if (oldPos === newPos) {
            return
          }

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

  const Component = useMemo(() => (lazy ? LazyItem : Item), [lazy])

  const counts = items.reduce(
    (acc, cur) => {
      const index = getPos(cur)
      acc[index]++
      return acc
    },
    [...arr]
  )

  const renderCells = () =>
    counts.map((_, index) => <div key={index} className={classes.gridItem} />)

  const renderItems = () =>
    items.map((item, index) => (
      <Component
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
