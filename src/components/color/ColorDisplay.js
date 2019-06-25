import React from 'react'
import style from './color.module.scss'

const ColorDisplay = (props) => {
  const { color } = props
  
  const rgbToHex = (r, g, b) => {
    if (r > 255 || g > 255 || b > 255) throw new Error('Invalid color component')
    const temp = ((r << 16) | (g << 8) | b).toString(16)
    return "#" + ("000000" + temp).slice(-6)
  }

  return (
    <div className={ style.colorWrapper }>
      <span style={ {backgroundColor: `rgb(${color.toString()})`} } className={ style.square } />
      <span className={ style.text }>Rgb: { color.slice(0,3).toString() }</span>
      <span className={ style.text }>Hex: { rgbToHex(...color) }</span>
    </div>
  )
}

export default ColorDisplay
