import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const title = style({
  fontSize: 32,
  marginLeft: 20,
  position: 'relative',
  cursor: 'pointer',
})

const selectedVariants = styleVariants({
  true: { fontSize: 64 },
  false: {},
})

export default {
  list: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateZ(0)',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    userSelect: 'none',
  }),

  title: recipe({
    base: title,
    variants: { selected: selectedVariants },
  }),

  underline: style({
    width: '100%',
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    bottom: '-4px',
  }),
}
