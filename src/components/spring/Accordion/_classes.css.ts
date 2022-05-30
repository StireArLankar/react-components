import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const openVariants = styleVariants({
  true: {},
  false: {},
})

const baseWrapper = style({ width: '100%' })

export const wrapper = recipe({
  base: baseWrapper,
  variants: { open: openVariants },
})

export const toggle = style({
  width: '100%',
  backgroundColor: 'rgb(9, 9, 80)',
  fontSize: 14,
  fontWeight: 700,
  padding: '12px 16px',
  position: 'relative',
  border: 'none',
  outline: 'none',
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'space-between',
})

export const title = style({
  color: 'thistle',
  textTransform: 'uppercase',
})

export const baseArrow = style({
  width: 27,
  transform: 'rotate(0)',
  transition: 'transform 0.3s ease',
  color: 'orange',
})

export const arrow = style([
  baseArrow,
  {
    selectors: {
      [`${openVariants.true} &`]: {
        transform: 'rotate(180deg)',
      },
    },
  },
])

export const content = style({ overflow: 'hidden' })
