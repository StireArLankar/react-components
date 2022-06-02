import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

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

  popover: style({
    position: 'absolute',
    top: '100%',
    left: 0,
    transformOrigin: 'top',
    backgroundColor: vars.color.border,
    borderRadius: 10,
    overflow: 'hidden',

    selectors: {
      '& > *': {
        padding: `8px 0`,
        margin: `0 8px`,
        position: 'relative',
      },
    },
  }),
}
