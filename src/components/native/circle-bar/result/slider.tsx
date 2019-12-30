import React, { useContext } from 'react'
import './style.scss'
import { Ctx } from '.'

const numbers = []

for (let i = 0; i < 10; i++) {
  numbers.push(i)
}

interface SliderProps {
  kee: string
}

const Slider = (props: SliderProps) => {
  const { kee } = props

  const ctx = useContext(Ctx)
  const { charDict, numDict } = ctx

  const number = charDict[kee] || numDict[kee]

  return (
    <ul className='result__slider list' style={{ transform: `translateY(-${number * 80}px)` }}>
      {Object.keys(numDict).map((key) => (
        <li key={key} className='result__slide result__slide--num'>
          {key}
        </li>
      ))}

      {Object.keys(charDict).map((key) => (
        <li key={key} className='result__slide result__slide--char'>
          {key}
        </li>
      ))}
    </ul>
  )
}

export default Slider
