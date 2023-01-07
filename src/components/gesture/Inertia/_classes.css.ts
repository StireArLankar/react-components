import { style } from '@vanilla-extract/css'

export default {
  wrapper: style({
    width: '100%',
    userSelect: 'none',
    touchAction: 'none',
  }),
  box: style({
    marginBottom: 20,
    width: '100%',
    height: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    userSelect: 'none',
  }),
}
