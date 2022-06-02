import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { basePopup } from '../_classes.css'

import { vars } from '~/theme/theme.css'

const sideVariants = styleVariants({
  top: {
    bottom: `calc(100% +16px)`,
    '::before': {
      top: 'calc(100% - 1px)',
      borderBottomWidth: 0,
      borderTopColor: vars.color.light,
    },
  },
  bottom: {
    top: `calc(100% +16px)`,
    '::before': {
      bottom: 'calc(100% - 1px)',
      borderTopWidth: 0,
      borderBottomColor: vars.color.light,
    },
  },
})

const popup = style({ left: 'unset', position: 'fixed' })

export default {
  anchor: style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }),

  popup: recipe({
    base: [basePopup, popup],
    variants: { side: sideVariants },
  }),
}
