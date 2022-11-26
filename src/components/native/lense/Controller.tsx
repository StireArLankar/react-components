import React, { useState } from 'react'

import Handler from './Handler'
import style from './lense.module.scss'
import View from './View'

type Props = {
  size: number
  lenseSize: number
  url: string
}

const Controller = (props: Props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const { size, lenseSize, url } = props

  const changeCoords = (x: number, y: number) => setCoords({ x, y })

  const dynamicStyle: React.CSSProperties = {
    ['--size' as any]: `${size}px`,
    ['--lense-size' as any]: `${lenseSize}px`,
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
