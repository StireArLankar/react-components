import { keyframes, style } from '@vanilla-extract/css'

const animate1 = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '50%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(100%)' },
})
const animate2 = keyframes({
  '0%': { transform: 'translateY(-100%)' },
  '50%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(100%)' },
})
const animate3 = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '50%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(-100%)' },
})
const animate4 = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '50%': { transform: 'translateY(-100%)' },
  '100%': { transform: 'translateY(-100%)' },
})

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
    backgroundColor: 'currentColor',
    boxShadow:
      '0 0 5px currentColor, 0 0 25px currentColor, 0 0 50px currentColor, 0 0 100px currentColor',
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

  tail: style({
    position: 'absolute',
    display: 'block',

    selectors: {
      '&:nth-child(1)': {
        top: 0,
        left: 0,
        transform: 'translateX(-100%)',
        width: '100%',
        height: 2,
        background: `linear-gradient(90deg, transparent, currentColor)`,
        animation: `${animate1} 1s linear infinite`,
      },
      '&:nth-child(2)': {
        top: 0,
        transform: 'translateY(-100%)',
        right: 0,
        height: '100%',
        width: 2,
        background: `linear-gradient(180deg, transparent, currentColor)`,
        animation: `${animate2} 1s linear infinite`,
        animationDelay: '0.25s',
      },
      '&:nth-child(3)': {
        bottom: 0,
        right: 0,
        transform: 'translateX(100%)',
        width: '100%',
        height: 2,
        background: `linear-gradient(270deg, transparent, currentColor)`,
        animation: `${animate3} 1s linear infinite`,
        animationDelay: '0.5s',
      },
      '&:nth-child(4)': {
        bottom: 0,
        left: 0,
        transform: 'translateY(100%)',
        height: '100%',
        width: 2,
        background: `linear-gradient(360deg, transparent, currentColor)`,
        animation: `${animate4} 1s linear infinite`,
        animationDelay: '0.75s',
      },
    },
  }),
}
