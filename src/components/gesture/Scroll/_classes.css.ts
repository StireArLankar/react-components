import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

export default {
  wrapper: style({
    background: vars.color.border,
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '5%',
    right: '5%',
    borderRadius: 10,
    height: 80,
    overflow: 'hidden',
  }),

  progress: style({
    background: vars.color.red,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 10,
    opacity: '.8',
  }),

  scrollArea: style({
    backgroundColor: vars.color.main,
    maxHeight: '50vh',
    width: '100%',
    overflowY: 'scroll',
  }),

  scrollInner: style({ height: '400vh' }),
}
