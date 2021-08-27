import React from 'react'

import style from './lense.module.scss'

const View = (props) => {
  const { x, y, url, size, lenseSize } = props
  const offset = (size * size) / lenseSize - size
  const dynamicStyle = {
    transform: `translate(-${x * offset}px, -${y * offset}px)`,
    width: `${(size * size) / lenseSize}px`,
    height: `${(size * size) / lenseSize}px`,
  }

  return (
    <div className={style.view}>
      <div className={style.viewWrapper} style={dynamicStyle}>
        <img src={url} alt='' className={style.viewImg} />
      </div>
    </div>
  )
}

export default View
