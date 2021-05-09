import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const paths = {
  max:
    'M 21 3 C 22.522 9 22.522 14 21 21 M 18 6 C 18.772 9 18.772 15 18 18 M 15 9 C 15.2 11 15.2 13 15 15',
  med:
    'M 18 6 C 18.772 10 18.772 14 18 18 M 15 9 C 15.201 11 15.201 13 15 15 M 12 12 C 12 11.931 12 11.863 12 11.794',
}

export const SvgMorph = () => {
  const [flag, setFlag] = useState(false)
  const toggle = () => setFlag((prev) => !prev)

  const { max, med } = paths

  const spring = useSpring({
    d: flag ? max : med,
  })

  return (
    <svg viewBox='10 5 14 10' width='100' height='200' onClick={toggle}>
      <animated.path
        {...spring}
        stroke='white'
        strokeLinecap='round'
        strokeWidth='2'
      />
    </svg>
  )
}
