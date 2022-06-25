import React, { useState, useCallback, useMemo, useEffect } from 'react'

import { produce } from 'immer'

import classes from '../_classes.css'

import { Item } from './Item'
import { LazyItem } from './LazyItem'

const MAGIC = 4

const arr: number[] = new Array(MAGIC * MAGIC).fill(-1)

type IState = Array<[number, number]>

const getPos = ([x, y]: [number, number]) => y * MAGIC + x
const getXY = (pos: number): [number, number] => [
  pos % MAGIC,
  Math.floor(pos / MAGIC),
]

export interface SwapDnDGridProps {
  lazy?: boolean
  full?: boolean
}

const generateItems = (arr: number[]) => arr.map((_, index) => getXY(index))
const unfilledItems: IState = [
  [0, 0],
  [1, 2],
  [3, 2],
  [2, 3],
  [0, 1],
  [0, 2],
  [1, 0],
]

export const SwapDnDGrid = (props: SwapDnDGridProps) => {
  const { lazy, full } = props

  const [items, setItems] = useState<IState>([])

  useEffect(() => {
    setItems(full ? generateItems(arr) : unfilledItems)
  }, [full])

  const updateItemPosition = useCallback(
    (index: number, x: number, y: number) => {
      setItems((state) =>
        produce(state, (draft) => {
          const oldPos = getPos(draft[index])
          let newPos = getPos([x, y])

          if (oldPos === newPos) {
            return
          }

          const targetIndex = state.findIndex((item) => getPos(item) === newPos)

          draft[targetIndex] = getXY(oldPos)
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
