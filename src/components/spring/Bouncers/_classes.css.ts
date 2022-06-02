import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

export default {
  wrapper: style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: vars.color.light,
  }),

  bouncer: style({
    width: 50,
    height: 50,
    backgroundColor: vars.color.green,
    borderRadius: '50%',
    position: 'absolute',
  }),
}
