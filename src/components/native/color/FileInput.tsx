import React, { ChangeEvent } from 'react'
import style from './color.module.scss'

interface FileInputProps {
  onFileUpload: (evt: ChangeEvent<HTMLInputElement>) => void
}

const FileInput = (props: FileInputProps) => {
  const { onFileUpload } = props

  return (
    <label className={style.labelWrapper}>
      <input
        type='file'
        accept='image/*'
        onChange={onFileUpload}
        className={style.input}
      />
      <span className={style.label}>Выберите изображение</span>
    </label>
  )
}

export default FileInput
