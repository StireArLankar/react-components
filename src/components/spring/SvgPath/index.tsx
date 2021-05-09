import React, { useRef, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

export const SvgPath = () => {
  const [toggle, setToggle] = useState(false)
  const pathRef = useRef<SVGPolygonElement>(null)

  const { x } = useSpring({
    x: toggle ? 0 : 100,
    config: {
      tension: 50,
      mass: 10,
      clamp: true,
    },
  })

  useEffect(() => {
    const interval = setInterval(() => setToggle((prev) => !prev), 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <animated.svg
      viewBox='-2 0 50 40'
      strokeWidth='1'
      width={20}
      height={20}
      fill='transparent'
      strokeLinecap='round'
      strokeLinejoin='round'
      style={{
        stroke: 'currentColor',
        strokeDasharray: 100,
        strokeDashoffset: x.to((x) => x),
        width: '100%',
        height: '100%',
      }}
      onClick={() => setToggle((prev) => !prev)}
    >
      <polygon
        ref={pathRef}
        pathLength='100'
        points='22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994'
      />
    </animated.svg>
  )
}
