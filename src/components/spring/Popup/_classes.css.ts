import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '~/theme/theme.css'

export const basePopup = style({
  position: 'absolute',
  left: '50%',
  willChange: 'transform',
  zIndex: 1,
  width: 208,
  borderRadius: 4,
  color: vars.color.text,
  background: vars.color.light,
  boxShadow: '0 3px 10px 0 rgba(0,0,0,0.2)',
  textAlign: 'center',
  fontSize: 14,
  padding: `16px 24px`,
  border: `1px solid hsla(0,0%,100%,.1)`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '::before': {
    boxSizing: 'inherit',
    content: "''",
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    border: `10px solid transparent`,
  },
})

const sideVariants = styleVariants({
  top: {
    bottom: `calc(100% + 16px)`,
    '::before': {
      top: 'calc(100% - 1px)',
      borderBottomWidth: 0,
      borderTopColor: vars.color.light,
    },
  },
  bottom: {
    top: `calc(100% + 16px)`,
    '::before': {
      bottom: 'calc(100% - 1px)',
      borderTopWidth: 0,
      borderBottomColor: vars.color.light,
    },
  },
})

export default {
  popup: recipe({
    base: basePopup,
    variants: { side: sideVariants },
  }),
}
