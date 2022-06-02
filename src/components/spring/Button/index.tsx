import { memo, useRef, useState } from 'react'

import { animated, useSpringRef, useChain, useSpring } from '@react-spring/web'

import classes from './_classes.css'
import { getTextWidth } from './helpers'

type Variants = 'bold' | 'regular'

export type ResponsiveTextProps = {
  text: string
  variant?: Variants
}

const variantToFont = (variant: Variants): string => {
  switch (variant) {
    case 'bold':
      return 'bold 60px cursive'
    case 'regular':
      return '60px cursive'
  }
}

const variantToXPadding = (variant: Variants): number => {
  switch (variant) {
    case 'bold':
      return 34
    case 'regular':
      return 24
  }
}

const variantToYHeight = (variant: Variants): number => {
  switch (variant) {
    case 'bold':
      return 100
    case 'regular':
      return 84
  }
}

export default memo((props: ResponsiveTextProps) => {
  const { text, variant = 'bold' } = props

  const [state, setState] = useState(false)

  const svgRef = useRef<SVGSVGElement>(null)

  const ref1 = useSpringRef()
  const ref2 = useSpringRef()
  const ref3 = useSpringRef()

  const temp1 = useSpring({
    ref: ref1,
    opacity: state ? 0 : 1,
    from: { opacity: 1 },
  })

  const temp2 = useSpring({
    opacity: state ? 0 : 1,
    onChange: ({ opacity: val }: any) => {
      const viewbox = `0 0 ${val * width + (1 - val) * y} ${y}`
      svgRef.current?.setAttribute('viewBox', viewbox)
    },
    ref: ref2,
  })

  const temp3 = useSpring({
    opacity: state ? 1 : 0,
    from: { opacity: 0 },
    ref: ref3,
  })

  useChain(
    state ? [ref1, ref2, ref3] : [ref3, ref2, ref1],
    state ? [0, 0.3, 0.8] : [0, 0.6, 1.3]
  )

  const font = variantToFont(variant)
  const xpad = variantToXPadding(variant)
  const y = variantToYHeight(variant)

  const width = getTextWidth(text, font) + xpad * 2

  return (
    <animated.svg
      onClick={() => setState((prev) => !prev)}
      viewBox={temp2.opacity.to(
        (val) => `0 0 ${val * width + (1 - val) * y} ${y}`
      )}
      ref={svgRef}
      // viewBox={`0 0 ${width} ${y}`}
      style={{
        height: y * 2,
        background: '#0162c8',
        fill: 'white',
      }}
    >
      <animated.rect
        stroke='white'
        strokeWidth='5'
        x='5'
        y='5'
        fill='none'
        width={temp2.opacity.to(
          (val) => (width - 10) * val + (y - 10) * (1 - val)
        )}
        height={y - 10}
        rx={temp2.opacity.to({
          range: [0, 0.5, 1],
          output: [y / 2, 10, 10],
        })}
        pathLength='10'
        style={{
          strokeDasharray: temp2.opacity.to({
            range: [0, 1],
            output: [10, 2.5],
          }),
          strokeDashoffset: temp2.opacity.to({
            range: [0, 1],
            output: [0, 3.1],
          }),
        }}
      />
      <animated.rect
        stroke='white'
        strokeWidth='8'
        x={y / 4}
        y={y / 4}
        fill='none'
        width={y / 2}
        height={y / 2}
        pathLength='100'
        transform='scale(0.8)'
        style={{
          strokeDasharray: 100,
          strokeDashoffset: temp3.opacity.to({
            range: [0, 1],
            output: [100, 0],
          }),
          transformOrigin: 'center',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
      />
      <animated.text
        x='50%'
        y='50%'
        textAnchor='middle'
        dominantBaseline='central'
        className={classes[variant]}
        style={temp1}
      >
        {text}
      </animated.text>
    </animated.svg>
  )
})
