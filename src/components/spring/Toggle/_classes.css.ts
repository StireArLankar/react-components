import { style } from '@vanilla-extract/css'

export default {
  wrapper: style({
    position: 'relative',
    width: 36,
    height: 36,
    marginRight: 16,
  }),

  img: style({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
}
