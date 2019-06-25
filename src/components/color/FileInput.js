import React from 'react'
import style from './color.module.scss'

const FileInput = (props) => {
  return (
    <label className={style.labelWrapper}>
      <input type="file" accept="image/*" onChange={ props.onFileUpload } className={style.input} />
      <p className={style.label}>Выберите изображение</p>
    </label>
  )
}

export default FileInput
