import React, { useState } from 'react'
import useBGColor from '../../../hook/useBgColor'
import Ring from './progress-ring'
import Result from './result'
import './style.scss'

export const CircleBar = () => {
  const [progress, setProgress] = useState(100)

  useBGColor(223, 211, 251)

  const onRingClick = (value: number) => setProgress(value)

  return (
    <div className='circle-bar'>
      <Ring radius={200} stroke={30} progress={progress} onRingClick={onRingClick}>
        <Result progress={progress} />
      </Ring>
    </div>
  )
}

export default CircleBar
