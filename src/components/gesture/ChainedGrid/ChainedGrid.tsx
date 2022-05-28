import { useState, useCallback, useMemo } from 'react'

import { produce } from 'immer'

import classes from './classes'
import { CrazyItem } from './CrazyItem'
import { data } from './data'
import { Item } from './Item'

const MAGIC = 4

const arr: number[] = new Array(MAGIC * MAGIC).fill(-1)

type IState = Array<[number, number]>

const getPos = ([x, y]: [number, number]) => y * MAGIC + x
const getXY = (pos: number): [number, number] => [
  pos % MAGIC,
  Math.floor(pos / MAGIC),
]

const indexedData = data.map((_, index) => getXY(index))

export interface ChainedGridProps {
  isCrazy?: boolean
}

export const ChainedGrid = ({ isCrazy }: ChainedGridProps) => {
  const [items, setItems] = useState<IState>(indexedData)
  const [active, set] = useState<number | null>(null)

  const setActive = useCallback(
    (index: number) => set((prev) => (prev === index ? null : index)),
    []
  )

  const onStart = useCallback(() => set(null), [])

  type Fun = (index: number, x: number, y: number) => void
  const updateItemPosition = useCallback<Fun>((index, x, y) => {
    setItems((state) =>
      produce(state, (draft) => {
        const oldPos = getPos(draft[index])
        let newPos = getPos([x, y])

        if (oldPos === newPos) {
          return
        }

        const field = arr.slice()
        state.forEach((item, index) => (field[getPos(item)] = index))

        let first = true
        let check = field[newPos] !== -1
        while (check) {
          if (first) {
            first = false
            const prevPos = newPos - 1 < 0 ? MAGIC * MAGIC - 1 : newPos - 1
            check = field[prevPos] === -1 || prevPos === oldPos

            if (check) {
              draft[field[newPos]] = getXY(prevPos)
              break
            }
          }

          const nextPos = newPos + 1 > MAGIC * MAGIC - 1 ? 0 : newPos + 1
          check = field[nextPos] !== -1 && nextPos !== oldPos
          draft[field[newPos]] = getXY(nextPos)
          newPos = nextPos
        }

        draft[index] = [x, y]
      })
    )
  }, [])

  const renderCells = () =>
    arr.map((_, index) => <div key={index} className={classes.gridItem()} />)

  const Component = useMemo(() => (isCrazy ? CrazyItem : Item), [isCrazy])

  const renderItems = () =>
    items.map((item, index) => (
      <Component
        key={index}
        index={index}
        step={100}
        max={MAGIC - 1}
        position={item}
        updatePosition={updateItemPosition}
        onStart={onStart}
        active={active === index}
        onClick={setActive}
      />
    ))

  return (
    <div className={classes.grid()}>
      {renderCells()}
      {renderItems()}
    </div>
  )
}
