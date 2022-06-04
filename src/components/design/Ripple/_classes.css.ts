import { keyframes, style, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

const ripple = keyframes({
  from: { width: 0, height: 0, opacity: 0.5 },
  to: { width: 500, height: 500, opacity: 0 },
})

const baseButton = style({
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  overflow: 'hidden',
  position: 'relative',
  padding: '18px 36px',
  color: 'white',
  textTransform: 'uppercase',
  fontSize: 18,
  lineHeight: 1,
  letterSpacing: '2px',
  borderRadius: 40,
  background: `linear-gradient(90deg, #0162c8, #55e7fc)`,
})

const buttonVariants = styleVariants({
  primary: { background: `linear-gradient(90deg, #0162c8, #55e7fc)` },
  secondary: { background: `linear-gradient(90deg, #755bea, #ff72c0)` },
})

const button = recipe({
  base: baseButton,
  variants: { variant: buttonVariants },
  defaultVariants: { variant: 'primary' },
})

export type Variants = RecipeVariants<typeof button>

export default {
  button,

  ripple: style({
    position: 'absolute',
    background: 'white',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    borderRadius: '50%',
    animation: `${ripple} 1s linear`,
  }),
}
