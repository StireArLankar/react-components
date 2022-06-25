import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '~/theme/theme.css'

const sidePopupVariants = styleVariants({
  top: { bottom: `100%`, paddingBottom: 12 },
  bottom: { top: `100%`, paddingTop: 12 },
})

const basePopup = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  width: '100%',
})

const sideContentVariants = styleVariants({
  top: {
    '::before': {
      top: 'calc(100% - 1px)',
      borderBottomWidth: 0,
      borderTopColor: vars.color.light,
    },
  },
  bottom: {
    '::before': {
      bottom: 'calc(100% - 1px)',
      borderTopWidth: 0,
      borderBottomColor: vars.color.light,
    },
  },
})

const baseContent = style({
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
  position: 'relative',

  '::before': {
    content: "''",
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    border: `10px solid transparent`,
  },
})

export default {
  popup: recipe({
    base: basePopup,
    variants: { side: sidePopupVariants },
  }),

  content: recipe({
    base: baseContent,
    variants: { side: sideContentVariants },
  }),
}
