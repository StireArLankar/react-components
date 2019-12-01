import React from 'react'
import cn from 'classnames'
import useBGColor from '../../hook/useBGColor'
import classes from './intersection.module.scss'

import ListItem from './ListItem'

const getUrl = (index) => `https://stirearlankar.github.io/54729-kekstagram/photos/${index + 8}.jpg`

const Intersection = () => {
  useBGColor(197, 241, 246)

  const renderItems = () =>
    new Array(10)
      .fill(1)
      .map((_, index) => <ListItem url={getUrl(index)} index={index} key={index} />)

  const listClass = cn({
    [classes.list]: true,
    'custom-scroll': true
  })

  return (
    <div className={classes.wrapper}>
      <ul className={listClass}>{renderItems()}</ul>
    </div>
  )
}

export default Intersection
