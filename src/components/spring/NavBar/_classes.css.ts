import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

const popover = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  transformOrigin: 'top',
  backgroundColor: vars.color.border,
  borderRadius: 10,
  overflow: 'hidden',
})

globalStyle(`${popover} > *`, {
  padding: `8px 0`,
  margin: `0 8px`,
  position: 'relative',
})

export default {
  nav: style({
    backgroundColor: vars.color.main,
    display: 'flex',
    position: 'relative',
    width: '100%',
  }),

  item: style({
    flexBasis: 0,
    flexGrow: 1,
    padding: `8px 16px`,
    color: vars.color.text,
    fontSize: 20,
    textAlign: 'center',
    selectors: {
      '&:not(:first-child)': {
        borderLeft: `1px solid ${vars.color.border}`,
      },
    },
  }),

  popover,
}
