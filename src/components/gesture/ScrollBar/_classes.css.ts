import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

export default {
  container: style({
    height: 400,
    width: 300,
    position: 'relative',
    overflow: 'hidden',
    userSelect: 'none',
    backgroundColor: vars.color.light,
    touchAction: 'none',
  }),

  content: style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    willChange: 'transform',
  }),

  progressWrapper: style({
    position: 'absolute',
    overflow: 'hidden',
    right: 2,
    top: 2,
    bottom: 2,
    borderRadius: 5,
    width: 5,
    backgroundColor: vars.color.dark,
  }),

  progress: style({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: vars.color.orange,
    top: '0',
    borderRadius: 5,
    transformOrigin: 'top',
    willChange: 'transform',
  }),

  counter: style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: 30,
  }),

  block: style({
    height: 100,
    width: 100,
    background: 'red',
    marginLeft: 'auto',
  }),

  spacer: style({ height: 100, width: 100 }),
}
