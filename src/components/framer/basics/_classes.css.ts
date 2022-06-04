import { style } from '@vanilla-extract/css'

export default {
  box: style({
    background: 'white',
    borderRadius: 30,
    width: 150,
    height: 150,
  }),

  button: style({
    position: 'absolute',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
  }),
}
