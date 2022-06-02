import { style } from '@vanilla-extract/css'

export default {
  backdrop: style({
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 200,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
  }),

  card: style({
    position: 'relative',
    animationDuration: '0.75s',
    borderRadius: 10,
    padding: 15,
    zIndex: 201,
    minWidth: 320,
    backgroundColor: 'white',
    height: 200,
    display: 'grid',
    placeItems: 'center',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',

    '@media': {
      'screen and (max-width: 520px)': {
        minWidth: 284,
      },
    },
  }),
}
