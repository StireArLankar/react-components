import React, { useState } from 'react'

import useBGColor from '~/hook/useBgColor'

import { Button } from './Button'
import ImgSlide from './ImgSlide'
import Slider from './Slider'
import classes from './slider.module.scss'

const url = `https://stirearlankar.github.io/54729-kekstagram/photos/1.jpg`
const numbers = [1, 2, 3, 4, 5, 6, 7]
const reg = /\/1\./g
const urls = numbers.map((num) => url.replace(reg, `/${num}.`))
const array = urls.map((url, index) => (
  <ImgSlide url={url} text={String(index + 1)} />
))

export const SliderOne = () => {
  const [index, setIndex] = useState(0)
  const [isReady, setIsReady] = useState(true)

  useBGColor(251, 219, 211)

  const updateIndexBy = (number: number) => () => {
    if (!isReady) {
      return
    }
    setIndex(index + number)
    setIsReady(false)
  }

  const increaseIndex = updateIndexBy(1)
  const decreaseIndex = updateIndexBy(-1)

  const beReady = () => setIsReady(true)

  return (
    <div className={classes.wrapper}>
      <Button onClick={decreaseIndex}>Backward</Button>

      <div className={classes.stageWrapper}>
        <Slider index={index} components={array} onComplete={beReady} />
      </div>

      <Button onClick={increaseIndex}>Forward</Button>
    </div>
  )
}

export default SliderOne
