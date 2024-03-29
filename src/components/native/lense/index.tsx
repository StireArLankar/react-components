import React, { useState, ChangeEvent, Fragment } from 'react'

import useBGColor from '~/hook/useBgColor'

import Controller from './Controller'
import classes from './lense.module.scss'

export const LenseContainer = () => {
  const [size, setSize] = useState(200)
  const [lenseSize, setLenseSize] = useState(50)
  const [url] = useState(
    'https://stirearlankar.github.io/54729-kekstagram/photos/14.jpg'
  )

  useBGColor(197, 241, 246)

  const evtHandler =
    (callback: (num: number) => void) =>
    (evt: ChangeEvent<HTMLInputElement>) => {
      const value = +evt.target.value
      if (isNaN(value)) {
        return
      }
      callback(value)
    }

  const onSizeChange = evtHandler(setSize)
  const onLenseSizeChange = evtHandler(setLenseSize)

  return (
    <Fragment>
      <div className={classes.container}>
        <Controller size={size} lenseSize={lenseSize} url={url} />
      </div>
      <div className={classes.controls}>
        <label className={classes.label}>
          <span className={classes.labelText}>Размер изображений</span>
          <input type='text' value={size} onChange={onSizeChange} />
        </label>
        <label className={classes.label}>
          <span className={classes.labelText}>Размер линзы</span>
          <input type='text' value={lenseSize} onChange={onLenseSizeChange} />
        </label>
      </div>
    </Fragment>
  )
}

export default LenseContainer
