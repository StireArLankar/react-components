import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const dragVariants = styleVariants({
  true: { cursor: 'grabbing' },
  false: {},
})
const disabledVariants = styleVariants({
  true: { opacity: 0.5, cursor: 'default' },
  false: {},
})

const baseCard = style({
  position: 'relative',
  width: '20vw',
  height: '20vw',
  background: 'grey',
  borderRadius: 5,
  boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
  transition: 'box-shadow 0.5s, opacity 0.5s',
  willChange: 'transform',
  border: '10px solid white',
  cursor: 'grab',
  overflow: 'hidden',
  userSelect: 'none',

  ':hover': {
    boxShadow: '0px 30px 100px -10px rgba(0, 0, 0, 0.4)',
  },
})

export default {
  card: recipe({
    base: baseCard,
    variants: { drag: dragVariants, disabled: disabledVariants },
  }),

  inner: style({
    willChange: 'transform',
    height: '100%',
    margin: '0vw 0',

    selectors: {
      '& > *': {
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        margin: '0vw 0',
      },
    },
  }),
}
