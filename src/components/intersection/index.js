import React from 'react'
import useBGColor from '../../hook/useBGColor'
import style from './intersection.module.scss'

import ListItem from './ListItem'

const getUrl = (index) =>
  `https://stirearlankar.github.io/54729-kekstagram/photos/${index + 8}.jpg`

const Intersection = () => {
  useBGColor(197, 241, 246)

  console.log('inside parent')

  const renderItems = () =>
    new Array(10)
      .fill(1)
      .map((_, index) => (
        <ListItem url={getUrl(index)} index={index} key={index} />
      ))

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>{renderItems()}</ul>
    </div>
  )
}

export default Intersection
