import React from 'react'
import style from './color.module.scss'

const FileInput = (props) => {
  return (
    <label className={style.labelWrapper}>
      <input type='file' accept='image/*' onChange={props.onFileUpload} className={style.input} />
      <span className={style.label}>Выберите изображение</span>
    </label>
  )
}

export default FileInput
