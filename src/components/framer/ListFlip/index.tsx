import React, { useState } from 'react'

import { motion, AnimateSharedLayout, MotionConfig } from 'framer-motion'

import classes from './_classes.css'

function move(
  id: number,
  targetListId: number,
  [a, b]: [number[], number[]],
  setLists: React.Dispatch<React.SetStateAction<[number[], number[]]>>
) {
  const targetList = targetListId === 0 ? a : b
  const originList = targetListId === 0 ? b : a

  const newOriginList = [...originList]
  const originIndex = newOriginList.indexOf(id)
  newOriginList.splice(originIndex, 1)

  const newTargetList = [...targetList]
  newTargetList.splice(0, 0, id)

  setLists(
    targetListId === 0
      ? [newTargetList, newOriginList]
      : [newOriginList, newTargetList]
  )
}

interface ListProps {
  id: string
  list: number[]
  onItemClick: (id: number) => void
  backgroundColor: string
}

const List = ({ id, list, onItemClick, backgroundColor }: ListProps) => {
  return (
    <motion.ul
      // layoutId={id}
      className={classes.list}
      style={{ borderRadius: 10 }}
      layout
    >
      {list.map((id) => (
        <motion.li
          className={classes.item}
          style={{ backgroundColor, zIndex: 2 }}
          key={id}
          layoutId={id.toString()}
          id={'list-' + id}
          onClick={() => onItemClick(id)}
          // drag
        />
      ))}
    </motion.ul>
  )
}

export default () => {
  const [lists, setLists] = useState<[number[], number[]]>([
    [0, 1, 2],
    [7, 8, 9],
  ])

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <AnimateSharedLayout>
        <div className={classes.container}>
          <List
            list={lists[0]}
            onItemClick={(id) => move(id, 1, lists, setLists)}
            backgroundColor='#ff3366'
            id='listA'
          />
          <List
            list={lists[1]}
            onItemClick={(id) => move(id, 0, lists, setLists)}
            backgroundColor='#0099ff'
            id='listB'
          />
        </div>
      </AnimateSharedLayout>
    </MotionConfig>
  )
}
