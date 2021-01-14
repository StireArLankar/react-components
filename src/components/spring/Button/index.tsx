import React, { memo, useRef, useState } from 'react'
import {
  animated,
  AnimatedValue,
  ReactSpringHook,
  useChain,
  useSpring,
} from 'react-spring'

import { getTextWidth } from './helpers'
import useStyles from './styles'

type Variants = 'bold' | 'regular'

type ResponsiveTextProps = {
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

  const ref1 = useRef<ReactSpringHook>(null)
  const ref2 = useRef<ReactSpringHook>(null)
  const ref3 = useRef<ReactSpringHook>(null)

  const svgRef = useRef<SVGSVGElement>(null)

  const animatedProps = useSpring({
    opacity: state ? 0 : 1,
    from: { opacity: 1 },
    ref: ref1,
  })

  const animatedProps2 = useSpring({
    opacity: state ? 0 : 1,
    from: { opacity: 1 },
    ref: ref2,
    onFrame: ({ opacity: val }: any) => {
      const viewbox = `0 0 ${val * width + (1 - val) * y} ${y}`
      svgRef.current?.setAttribute('viewBox', viewbox)
    },
  })

  const animatedProps3 = useSpring({
    opacity: state ? 1 : 0,
    from: { opacity: 0 },
    ref: ref3,
  })

  useChain(
    state ? [ref1, ref2, ref3] : [ref3, ref2, ref1],
    state ? [0, 0.3, 0.8] : [0, 0.6, 1.3]
  )

  const temp1 = animatedProps as AnimatedValue<{ opacity: number }>
  const temp2 = animatedProps2 as AnimatedValue<{ opacity: number }>
  const temp3 = animatedProps3 as AnimatedValue<{ opacity: number }>

  const classes = useStyles()

  const font = variantToFont(variant)
  const xpad = variantToXPadding(variant)
  const y = variantToYHeight(variant)

  const width = getTextWidth(text, font) + xpad * 2

  return (
    <animated.svg
      onClick={() => setState((prev) => !prev)}
      viewBox={temp2.opacity.interpolate(
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
        width={temp2.opacity.interpolate(
          (val) => (width - 10) * val + (y - 10) * (1 - val)
        )}
        height={y - 10}
        rx={temp2.opacity.interpolate({
          range: [0, 0.5, 1],
          output: [y / 2, 10, 10],
        })}
        pathLength='10'
        style={{
          strokeDasharray: temp2.opacity.interpolate({
            range: [0, 1],
            output: [10, 2.5],
          }),
          strokeDashoffset: temp2.opacity.interpolate({
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
          strokeDashoffset: temp3.opacity.interpolate({
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
