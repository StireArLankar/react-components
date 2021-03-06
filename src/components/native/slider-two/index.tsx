import React from 'react'
import Slider from './slider'
import Slide from './slide'

import style from './slider.module.scss'
import useBGColor from '../../../hook/useBgColor'

const strings = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Aenean auctor metus a est ullamcorper iaculis at quis mauris.',
  'Quisque nec est auctor, pellentesque nisl ac, porta arcu.',
  'Donec porta magna id massa convallis fermentum.',
  'Morbi pharetra leo vitae quam gravida accumsan.',
  'Suspendisse in leo sit amet elit malesuada gravida.',
]

const array = strings.map((string, index) => (
  <Slide title={String(index + 1)} content={string} />
))

export const SliderTwo = () => {
  useBGColor(217, 236, 199)

  return (
    <div className={style.wrapper}>
      <Slider components={array} width={100} />
    </div>
  )
}

export default SliderTwo
