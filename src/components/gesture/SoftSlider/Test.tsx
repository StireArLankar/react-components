import React, { useState } from 'react'
import { Slider } from './SoftSlider'

const slides = ['red', 'blue', 'yellow', 'orange']
const style = { width: 300, height: '80%' }

export const Test = () => {
  const [index, setIndex] = useState(0)

  return (
    <Slider
      index={index}
      onIndexChange={setIndex}
      style={{
        width: 400,
        height: 300,
        backgroundColor: 'black',
        overflow: 'hidden',
      }}
    >
      {slides.map((color, i) => (
        <div key={i} style={{ ...style, background: color }} />
      ))}
    </Slider>
  )
}
