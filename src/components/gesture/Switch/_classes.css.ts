import { style } from '@vanilla-extract/css'

export default {
  container: style({ width: '100vw', height: '100vh' }),

  box: style({
    background: 'white',
    borderRadius: 30,
    width: 150,
    height: 150,
    position: 'absolute',
    top: 'calc(50% - 150px / 2)',
    left: 'calc(50% - 150px / 2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
  }),

  icon: style({ width: '80%', height: '80%' }),
}
