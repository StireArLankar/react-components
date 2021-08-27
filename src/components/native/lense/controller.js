import React, { useState } from 'react'

import View from './view'
import Handler from './handler'
import style from './lense.module.scss'

const Controller = (props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { size, lenseSize, url } = props

  const changeCoords = (x, y) => setCoords({ x, y })

  const dynamicStyle = {
    '--size': `${size}px`,
    '--lense-size': `${lenseSize}px`,
  }

  return (
    <div className={style.wrapper} style={dynamicStyle}>
      <Handler
        changeCoords={changeCoords}
        x={coords.x}
        y={coords.y}
        url={url}
        lenseSize={lenseSize}
      />
      <View
        x={coords.x}
        y={coords.y}
        url={url}
        size={size}
        lenseSize={lenseSize}
      />
    </div>
  )
}

export default Controller
