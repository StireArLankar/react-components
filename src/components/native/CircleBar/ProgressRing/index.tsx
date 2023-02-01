import React, { useRef, PropsWithChildren, MouseEvent, useMemo } from 'react'

export interface RingProps {
  radius: number
  stroke: number
  progress: number
  onRingClick: (arg: number) => void
}

export const Ring = (props: PropsWithChildren<RingProps>) => {
  const { radius, stroke, progress, onRingClick, children } = props

  const myRef = useRef(null)

  const onKeyDown = (evt: any) => {
    // const now = Date.now()
    // if (now - this.time < 100) return
    if (evt.keyCode === 38 || evt.keyCode === 39) {
      const result = progress <= 95 ? progress + 5 : 100
      onRingClick(result)
    }
    if (evt.keyCode === 37 || evt.keyCode === 40) {
      const result = progress >= 5 ? progress - 5 : 0
      onRingClick(result)
    }
    // this.time = now
  }

  const changeValue = (evt: any) => {
    evt.preventDefault()

    const el = myRef.current

    if (!el) {
      return
    }

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el
    const centerY = offsetTop + offsetHeight / 2
    const centerX = offsetLeft + offsetWidth / 2
    const action = onRingClick

    calculate(evt)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    function onMouseUp(evt: any) {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      calculate(evt)
    }

    function onMouseMove(evt: any) {
      const { clientX, clientY } = evt
      const x = clientX - centerX
      const y = -clientY + centerY
      const fi = (Math.atan2(x, y) * 50) / Math.PI
      const result = Math.ceil(fi < 0 ? fi + 100 : fi)
      action(result)
    }

    function calculate(evt: any) {
      const { clientX, clientY } = evt
      const x = clientX - centerX
      const y = -clientY + centerY
      const fi = (Math.atan2(x, y) * 50) / Math.PI
      const result = Math.ceil(fi < 0 ? fi + 100 : fi)
      action(result)
    }
  }

  const stopProp = (evt: MouseEvent) => {
    evt.stopPropagation()
    const result = progress > 50 ? 0 : 100
    onRingClick(result)
  }

  const container_style = {
    width: 2 * radius * 0.99,
    height: 2 * radius * 0.99,
  }
  const inner_style = {
    width: 2 * (radius - stroke) * 1.05,
    height: 2 * (radius - stroke) * 1.05,
  }

  return (
    <div
      className='circle-bar__container'
      onMouseDown={changeValue}
      onKeyDown={onKeyDown}
      ref={myRef}
      style={container_style}
      tabIndex={0}
    >
      <ProgressRing radius={radius} stroke={stroke} progress={progress} />
      <div
        className='circle-bar__inner'
        style={inner_style}
        onMouseDown={stopProp}
      >
        {children}
      </div>
    </div>
  )
}

interface ProgressRingProps {
  radius: number
  stroke: number
  progress: number
}

const ProgressRing = (props: ProgressRingProps) => {
  const { radius, stroke, progress } = props

  const [circumference, normalizedRadius] = useMemo(() => {
    const normalizedRadius = radius - stroke / 2
    const circumference = normalizedRadius * 2 * Math.PI
    return [circumference, normalizedRadius]
  }, [radius, stroke])

  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <svg className='circle-bar__svg' height={radius * 2} width={radius * 2}>
      <linearGradient id='gradient1'>
        <stop id='stop1' offset='0%' stopColor='black' stopOpacity='1' />
        <stop id='stop2' offset='100%' stopColor='green' />
      </linearGradient>

      <linearGradient
        id='gradient2'
        x1='0'
        x2='0'
        y1='0'
        y2='1'
        xlinkHref='#gradient1'
      />

      <circle
        stroke='url(#gradient1)'
        fill='transparent'
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}

export default Ring
