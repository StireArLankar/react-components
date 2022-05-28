import { css } from '@stitches/react'

export default {
  wrapper: css({
    position: 'fixed',
    paddingTop: 50,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    cursor: 'none',
    display: 'flex',
    flexDirection: 'column',
  }),

  cursor: css({
    width: '3rem',
    height: '3rem',
    border: '2px solid black',
    borderRadius: '50%',
    willChange: 'transform',
    position: 'fixed',
    top: 0,
    left: 0,
    margin: '-1.5rem 0 0 -1.5rem',
    zIndex: 10,
    pointerEvents: 'none',
    backdropFilter: 'grayscale(1)',
  }),

  nav: css({
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: '10vh',
    padding: `0 8px`,
    listStyle: 'none',
  }),

  navItem: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    fontSize: 20,
    zIndex: 11,
    color: 'black',
    transition: 'color 0.5s ease',

    variants: {
      active: {
        true: { color: 'white' },
      },
    },
  }),

  section: css({
    flexGrow: 1,
    position: 'relative',
  }),

  imgWrapper: css({
    position: 'absolute',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),

  img: css({
    objectFit: 'contain',
    height: '100%',
  }),
}
