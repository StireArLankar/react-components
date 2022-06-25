import { style, keyframes, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const heartBlast = keyframes({
  from: { backgroundPosition: 'left' },
  to: { backgroundPosition: 'right' },
})

const openVariants = styleVariants({
  true: {
    animationName: heartBlast,
    animationDuration: '.8s',
    animationIterationCount: 1,
    animationTimingFunction: 'steps(28)',
    backgroundPosition: 'right',
  },
  false: {},
})

const baseHeart = style({
  position: 'absolute',
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '2900%',
  height: 300,
  width: 300,
  left: '-100%',
  top: '-100%',
})

export default {
  container: style({
    position: 'relative',
    width: 100,
    height: 100,
    display: 'inline-block',
    top: 4,
  }),

  heart: recipe({
    base: baseHeart,
    variants: { open: openVariants },
  }),
}
