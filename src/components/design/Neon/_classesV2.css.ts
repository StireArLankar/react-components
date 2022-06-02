import { style } from '@vanilla-extract/css'

const button = style({
  position: 'relative',
  display: 'flex',
  padding: `24px 32px`,
  cursor: 'pointer',
  fontSize: 24,
  textTransform: 'uppercase',
  overflow: 'hidden',
  transition: '0.5s',
  letterSpacing: 4,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  WebkitBoxReflect: 'below 1px linear-gradient(transparent, #0005)',

  ':hover': {
    transitionDelay: '0.2s',
    backgroundColor: 'currentColor',
    boxShadow:
      '0 0 5px currentColor, 0 0 25px currentColor, 0 0 50px currentColor, 0 0 100px currentColor',
  },

  '::before': {
    content: '""',
    position: 'absolute',
    width: 10,
    height: 10,
    transition: '0.5s',
    top: 0,
    left: 0,
    borderTop: `2px solid currentColor`,
    borderLeft: `2px solid currentColor`,
  },

  '::after': {
    content: '""',
    position: 'absolute',
    width: 10,
    height: 10,
    transition: '0.5s',
    bottom: 0,
    right: 0,
    borderBottom: `2px solid currentColor`,
    borderRight: `2px solid currentColor`,
  },

  selectors: {
    '&:hover::before': { width: '100%', height: '100%' },
    '&:hover::after': { width: '100%', height: '100%' },
  },
})

export default {
  button,

  text: style({
    transition: '0.5s',
    color: `currentColor`,

    selectors: {
      [`${button}:hover &`]: {
        transitionDelay: '0.2s',
        color: '#050801',
      },
    },
  }),
}
