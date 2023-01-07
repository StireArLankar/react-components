import React from 'react'

import clsx from 'clsx'

import useBGColor from '~/hook/useBgColor'

import classes from './intersection.module.scss'
import ListItem from './ListItem'

const getUrl = (index: number) =>
  `https://stirearlankar.github.io/54729-kekstagram/photos/${index + 8}.jpg`

export const Intersection = () => {
  useBGColor(197, 241, 246)

  const renderItems = () =>
    new Array(10)
      .fill(1)
      .map((_, index) => <ListItem url={getUrl(index)} key={index} />)

  const listClass = clsx({
    [classes.list]: true,
    'custom-scroll': true,
  })

  return (
    <div className={classes.wrapper}>
      <ul className={listClass}>{renderItems()}</ul>
    </div>
  )
}

export default Intersection
