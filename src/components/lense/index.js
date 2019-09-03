import React, { useState } from 'react'
import useBGColor from '../../hook/useBGColor'
import style from './lense.module.scss'
import Controller from './controller'

const Container = (props) => {
  const [size, setSize] = useState(200)
  const [lenseSize, setLenseSize] = useState(50)
  const [url] = useState('https://stirearlankar.github.io/54729-kekstagram/photos/14.jpg')

  useBGColor(197, 241, 246)

  const evtHandler = (callback) => (evt) => {
    const value = +evt.target.value
    if (isNaN(value)) return
    callback(value)
  }

  const onSizeChange = evtHandler(setSize)
  const onLenseSizeChange = evtHandler(setLenseSize)

  return (
    <>
      <div className={style.container}>
        <Controller size={size} lenseSize={lenseSize} url={url}/>
      </div>
      <div className={style.controls}>
        <label className={style.label}>
          <span>Размер изображений</span>
          <input type='text' value={size} onChange={onSizeChange} /> 
        </label>
        <label className={style.label}>
          <span>Размер линзы</span>
          <input type='text' value={lenseSize} onChange={onLenseSizeChange} /> 
        </label>
      </div>
    </>
  )
}

export default Container
