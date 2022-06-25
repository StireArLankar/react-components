import { memo } from 'react'

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
      return 'bold 30px Roboto'
    case 'regular':
      return '30px Roboto'
  }
}

const variantToXPadding = (variant: Variants): number => {
  switch (variant) {
    case 'bold':
      return 17
    case 'regular':
      return 12
  }
}

const variantToYHeight = (variant: Variants): number => {
  switch (variant) {
    case 'bold':
      return 50
    case 'regular':
      return 42
  }
}

export default memo((props: ResponsiveTextProps) => {
  const { text, variant = 'bold' } = props

  const font = variantToFont(variant)
  const xpad = variantToXPadding(variant)
  const y = variantToYHeight(variant)

  const width = getTextWidth(text, font) + xpad * 2

  return (
    <svg
      viewBox={`0 0 ${width} ${y}`}
      style={{ width, background: '#0162c8', fill: 'white' }}
    >
      <text
        x='50%'
        y='50%'
        textAnchor='middle'
        dominantBaseline='central'
        className={classes.font[variant]}
      >
        {text}
      </text>
    </svg>
  )
})
