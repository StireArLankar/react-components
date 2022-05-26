import React, {
  useRef,
  useState,
  Fragment,
  MouseEvent,
  ChangeEvent,
} from 'react'

import classes from './color.module.scss'
import ColorDisplay from './ColorDisplay'
import FileInput from './FileInput'

import useBGColor from '~/hook/useBgColor'

export const Color = () => {
  const [moveColor, setMoveColor] = useState<[number, number, number]>([
    0, 0, 0,
  ])
  const [clickColor, setClickColor] = useState<[number, number, number]>([
    0, 0, 0,
  ])
  const [uploaded, setUploaded] = useState(false)
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0,
  })

  const canvas = useRef<HTMLCanvasElement>(null)

  useBGColor(210, 208, 233)

  const getEventLocation = (element: HTMLElement, evt: MouseEvent) => {
    const bound = element.getBoundingClientRect()
    const x = bound.x
    const y = bound.y + document.documentElement.scrollTop

    return {
      x: evt.pageX - x,
      y: evt.pageY - y,
    }
  }

  const getImgSizes = (img: HTMLImageElement) => {
    const { width, height } = img
    if (width > height && width > 500) {
      return [500, (500 * height) / width]
    } else if (height > width && height > 500) {
      return [(500 * width) / height, 500]
    }
    return [width, height]
  }

  const drawImageFromWebUrl = (url: string) => {
    var img = new Image()

    img.onload = () => {
      const [width, height] = getImgSizes(img)
      setSizes({ width, height })

      canvas.current?.getContext('2d')?.drawImage(img, 0, 0, width, height)
    }

    img.setAttribute('src', url)
  }

  const getColorFrom = (name: 'move' | 'click') => {
    const setColor = name === 'move' ? setMoveColor : setClickColor

    return (e: MouseEvent) => {
      if (canvas.current) {
        const eventLocation = getEventLocation(canvas.current, e)
        const context = canvas.current.getContext('2d')
        const pixelData = context?.getImageData(
          eventLocation.x,
          eventLocation.y,
          1,
          1
        ).data
        if (pixelData) {
          const array = Array.from(pixelData) as [number, number, number]
          setColor(array)
        }
      }
    }
  }

  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0]
    const reader = new FileReader()

    reader.onload = () => {
      const url = reader.result as string
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
