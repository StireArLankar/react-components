//@ts-nocheck
import React, { useRef } from 'react'

import style from './lense.module.scss'

const Handler = (props) => {
  const ref = useRef()

  const onMouseDown = (downE) => {
    downE.preventDefault()
    const handler = ref.current
    const { x: handlerX, y: handlerY } = handler.getBoundingClientRect()
    const { clientHeight, clientWidth } = handler

    const width = clientWidth - props.lenseSize
    const height = clientHeight - props.lenseSize

    const getX = (e) => (e.clientX - handlerX - props.lenseSize / 2) / width
    const getY = (e) => (e.clientY - handlerY - props.lenseSize / 2) / height

    let x = getX(downE)
    let y = getY(downE)

    const onMouseMove = (moveE) => {
      x = getX(moveE)
      y = getY(moveE)

      const xCheck = x >= 0 ? (x <= 1 ? x : 1) : 0
      const yCheck = y >= 0 ? (y <= 1 ? y : 1) : 0

      props.changeCoords(xCheck, yCheck)
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const { url, x, y } = props
  const dynamicStyle = {
    top: `${y * 100}%`,
    left: `${x * 100}%`,
  }

  return (
    <div className={style.handler} onMouseDown={onMouseDown} ref={ref}>
      <img src={url} alt='' className={style.handlerImg} />
      <div className={style.border}>
        <div className={style.lense} style={dynamicStyle} />
      </div>
    </div>
  )
}

export default Handler
