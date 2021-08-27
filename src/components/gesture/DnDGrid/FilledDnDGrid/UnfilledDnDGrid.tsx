import React, { useState, useCallback, useMemo, useEffect } from 'react'

import { produce } from 'immer'

import useStyles from '../useStyles'

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

export interface UnfilledDnDGridProps {
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

export const UnfilledDnDGrid = (props: UnfilledDnDGridProps) => {
  const { lazy, full } = props
  const classes = useStyles()

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

          const field = arr.slice()
          state.forEach((item, index) => (field[getPos(item)] = index))
          // [0, _ , 2, _ , 1]

          // Flag for checking first item for left cell
          let first = true
          // Check if cell is filled (field[newPos] === index)
          let check = field[newPos] !== -1
          while (check) {
            if (first) {
              first = false
              // Bounds stuff
              const prevPos = newPos - 1 < 0 ? MAGIC * MAGIC - 1 : newPos - 1
              // Check prev cell (and check if its position of dragged item)
              check = field[prevPos] === -1 || prevPos === oldPos

              if (check) {
                draft[field[newPos]] = getXY(prevPos)
                break
              }
            }

            // Bounds stuff
            const nextPos = newPos + 1 > MAGIC * MAGIC - 1 ? 0 : newPos + 1

            // Check next cell (and check in case of position of dragged item)
            check = field[nextPos] !== -1 && nextPos !== oldPos

            // Move item in newPos cell to right
            draft[field[newPos]] = getXY(nextPos)

            // Change attention to next cell in case its filled
            newPos = nextPos
          }

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
