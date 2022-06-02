import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '~/theme/theme.css'

const icon = style({ width: 18, height: 18 })

const activeVariants = styleVariants({
  true: { transform: 'scale(1.1)' },
  false: {},
})

const baseInfo = style({
  cursor: 'pointer',
  position: 'absolute',
  top: 8,
  right: 8,
  background: 'transparent',
  border: 'none',
  outline: 'none',
  transition: 'all 0.2s ease',
  transform: 'scale(1)',
  color: vars.color.orange,
  ':focus': { transform: 'scale(1.1)' },
  ':hover': { transform: 'scale(1.1)' },
})

const card = style({
  backgroundColor: vars.color.light,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  willChange: 'transform',
  backfaceVisibility: 'hidden',
  overflow: 'hidden',
  borderRadius: 4,
})

const back = style({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%',
  transform: 'rotateY(-180deg)',
})

export default {
  wrapper: style({
    userSelect: 'none',
    perspective: 1000,
    position: 'relative',
    width: '100%',
  }),

  inner: style({
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transformStyle: 'preserve-3d',
  }),

  card: recipe({
    base: card,
    variants: { active: activeVariants },
  }),

  back: recipe({
    base: [card, back],
    variants: { active: activeVariants },
  }),

  buttonInfo: baseInfo,

  buttonInfoIcon: icon,
  closeIcon: icon,
}
