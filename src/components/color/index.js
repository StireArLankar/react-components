import React, { useRef, useState, Fragment } from 'react'
import useBGColor from '../../hook/useBGColor'
import ColorDisplay from './ColorDisplay'
import FileInput from './FileInput'
import classes from './color.module.scss'

const Color = (props) => {
  const [moveColor, setMoveColor] = useState([0, 0, 0])
  const [clickColor, setClickColor] = useState([0, 0, 0])
  const [uploaded, setUploaded] = useState(false)
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0
  })

  const canvas = useRef()

  useBGColor(210, 208, 233)

  const getEventLocation = (element, event) => {
    const bound = element.getBoundingClientRect()
    const x = bound.x
    const y = bound.y + document.documentElement.scrollTop

    return {
      x: event.pageX - x,
      y: event.pageY - y
    }
  }

  const getImgSizes = (img) => {
    const { width, height } = img
    if (width > height && width > 500) {
      return [500, (500 * height) / width]
    } else if (height > width && height > 500) {
      return [(500 * width) / height, 500]
    } else {
      return [width, height]
    }
  }

  const drawImageFromWebUrl = (url) => {
    var img = new Image()

    img.onload = () => {
      const [width, height] = getImgSizes(img)
      setSizes({ width, height })
      canvas.current.getContext('2d').drawImage(img, 0, 0, width, height)
    }

    img.setAttribute('src', url)
  }

  const getColorFrom = (name) => {
    const setColor = name === 'move' ? setMoveColor : setClickColor

    return (e) => {
      const eventLocation = getEventLocation(canvas.current, e)
      const context = canvas.current.getContext('2d')
      const pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data
      setColor([...pixelData.slice()])
    }
  }

  const onFileUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      const url = reader.result
      setUploaded(true)
      drawImageFromWebUrl(url)
    }

    reader.readAsDataURL(file)
  }

  const renderField = () => {
    return (
      <Fragment>
        <div className={classes.left}>
          <canvas
            width={sizes.width}
            height={sizes.height}
            onMouseMove={getColorFrom('move')}
            onClick={getColorFrom('click')}
            ref={canvas}
            className={classes.canvas}
          />
        </div>
        <div className={classes.right}>
          <ColorDisplay color={moveColor} />
          <ColorDisplay color={clickColor} />
        </div>
        <FileInput onFileUpload={onFileUpload} />
      </Fragment>
    )
  }

  return (
    <div className={classes.wrapper}>
      {uploaded ? renderField() : <FileInput onFileUpload={onFileUpload} />}
    </div>
  )
}

export default Color
