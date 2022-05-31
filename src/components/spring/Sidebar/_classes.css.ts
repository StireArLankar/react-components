import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars, customScroll } from '~/theme/theme.css'

const baseSidebar = style({
  top: 0,
  left: 0,
  bottom: 0,
  width: 300,
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.light,
  boxShadow: '1px 0 10px rgba(0, 0, 0, 0.25)',
  padding: 16,
  overflowY: 'auto',
  overflowX: 'hidden',
})

const sideVariants = styleVariants({
  right: { left: 'auto', right: 0 },
  left: {},
})

export default {
  sidebar: recipe({
    base: [customScroll, baseSidebar],

    variants: { side: sideVariants },
    defaultVariants: { side: 'left' },
  }),

  item: style({
    marginTop: 8,

    selectors: {
      '&:first-child': {
        marginTop: 0,
      },
    },
  }),
}
