import React, { useState } from 'react'
import useBGColor from '../../hook/useBGColor'
import Slider from './slider'
import ImgSlide from './img-slide'
import classes from './slider.module.scss'

const url = `https://stirearlankar.github.io/54729-kekstagram/photos/1.jpg`
const numbers = [1, 2, 3, 4, 5, 6, 7]
const reg = /\/1\./g
const urls = numbers.map((num) => url.replace(reg, `/${num}.`))
const array = urls.map((url, index) => <ImgSlide url={url} text={index + 1} />)

const Controller = (props) => {
  const [index, setIndex] = useState(0)
  const [isReady, setIsReady] = useState(true)

  useBGColor(251, 219, 211)

  const updateIndexBy = (number) => () => {
    if (!isReady) return
    setIndex(index + number)
    setIsReady(false)
  }

  const increaseIndex = updateIndexBy(1)
  const decreaseIndex = updateIndexBy(-1)

  const beReady = () => setIsReady(true)

  return (
    <div className={classes.wrapper}>
      <button type='button' className={classes.btn} onClick={decreaseIndex}>
        Backward
      </button>

      <div className={classes.stageWrapper}>
        <Slider index={index} components={array} onComplete={beReady} />
      </div>

      <button type='button' className={classes.btn} onClick={increaseIndex}>
        Forward
      </button>
    </div>
  )
}

export default Controller
