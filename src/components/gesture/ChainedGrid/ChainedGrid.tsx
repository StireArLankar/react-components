import React, { useState, useCallback, useRef, useMemo } from 'react'
import { Item } from './Item'
import useStyles from './useStyles'
import { produce } from 'immer'
import { data, ItemModel } from './data'

const MAGIC = 4

const arr: number[] = new Array(MAGIC * MAGIC).fill(-1)

type IState = Array<[number, number]>

const getPos = ([x, y]: [number, number]) => y * MAGIC + x
const getXY = (pos: number): [number, number] => [
  pos % MAGIC,
  Math.floor(pos / MAGIC),
]

export const Ctx = React.createContext<{
  onClick: (index: number) => void
  data: ItemModel[]
}>({
  onClick: () => {},
  data: [],
})

const indexedData = data.map((_, index) => getXY(index))

export interface ChainedGridProps {}

export const ChainedGrid = (props: ChainedGridProps) => {
  const classes = useStyles()

  const [items, setItems] = useState<IState>(indexedData)
  const [active, set] = useState<number | null>(null)

  const setActive = useCallback(
    (index: number) => set((prev) => (prev === index ? null : index)),
    []
  )

  const isTap = useRef(false)

  const onStart = useCallback(() => {
    set(null)
    isTap.current = true
  }, [])

  const updateItemPosition = useCallback(
    (index: number, x: number, y: number) => {
      setItems((state) =>
        produce(state, (draft) => {
          const oldPos = getPos(draft[index])
          let newPos = getPos([x, y])

          if (oldPos === newPos) return

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
    },
    []
  )

  const renderCells = () =>
    arr.map((_, index) => <div key={index} className={classes.gridItem} />)

  const renderItems = () =>
    items.map((item, index) => (
      <Item
        key={index}
        index={index}
        step={100}
        max={MAGIC - 1}
        position={item}
        updatePosition={updateItemPosition}
        onStart={onStart}
        active={active === index}
        isTap={isTap}
      />
    ))

  const value = useMemo(() => ({ onClick: setActive, data }), [setActive])

  return (
    <Ctx.Provider value={value}>
      <div className={classes.grid}>
        {renderCells()}
        {renderItems()}
      </div>
    </Ctx.Provider>
  )
}
