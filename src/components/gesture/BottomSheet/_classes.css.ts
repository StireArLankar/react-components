import { createVar, style } from '@vanilla-extract/css'

export const backgroundVar = createVar()

export default {
  wrapper: style({
    position: 'fixed',
    left: '50%',
    userSelect: 'none',
    width: '100%',
    maxWidth: 600,
  }),

  wrapperFilter: style({
    filter: 'url(#goo)',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    bottom: 0,
  }),

  planc: style({
    width: '98%',
    top: -50,
    maxWidth: 600,
    background: backgroundVar,
    transform: 'translate(-50%, 50px)',
    position: 'absolute',
    left: '50%',
  }),

  box: style({
    borderRadius: 60,
    height: 250,
    width: 250,
    left: '50%',
    background: backgroundVar,
    userSelect: 'none',
    position: 'absolute',
    top: -50,
  }),
}
