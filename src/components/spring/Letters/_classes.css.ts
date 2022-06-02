import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

export default {
  text: style({
    fontSize: 30,
    color: vars.color.text,
  }),

  char: style({
    display: 'inline-block',
    minWidth: 8,
    willChange: 'transform',
    letterSpacing: '0.1em',
  }),
}
