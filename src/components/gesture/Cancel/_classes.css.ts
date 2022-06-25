import { style } from '@vanilla-extract/css'

export default {
  box: style({
    background: '#91c9f9',
    borderRadius: 16,
    height: 80,
    width: 80,
    zIndex: 10000,
    cursor: 'grab',
    touchAction: 'none',
  }),
}
