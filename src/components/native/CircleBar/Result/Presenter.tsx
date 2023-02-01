import React from 'react'
import './style.scss'

import Slider from './Slider'

interface PresenterProps {
  array: string[]
}

const Presenter = (props: PresenterProps) => {
  const { array } = props

  return (
    <ul className='result list'>
      {array.map((key, index) => (
        <li key={index} className='result__item'>
          <Slider kee={key} />
        </li>
      ))}
    </ul>
  )
}

export default Presenter
