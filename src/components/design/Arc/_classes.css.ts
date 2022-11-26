import { style, keyframes, createVar } from '@vanilla-extract/css'

const localVars = {
  start: createVar(),
  end: createVar(),
  s1: createVar(),
  s2: createVar(),
}

const anim = keyframes({
  from: {
    strokeDashoffset: localVars.start,
    transform: `translateX(${localVars.s1})`,
  },
  to: {
    strokeDashoffset: localVars.end,
    transform: `translateX(${localVars.s2})`,
  },
})

const color = keyframes({
  '0%': { color: 'yellow' },
  '33%': { color: 'green' },
  '66%': { color: 'blue' },
  '100%': { color: 'yellow' },
})

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  animation: `${color} 6s ease-in-out`,
  animationIterationCount: 'infinite',
  display: 'grid',
  placeItems: 'center',

  selectors: {
    '&::before': {
      boxSizing: 'inherit',
      position: 'fixed',
      content: "''",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'currentColor',
      opacity: 0.15,
    },
  },
})

export const box = style({
  width: 200,
  position: 'relative',
  marginBottom: 40,
  color: 'inherit',

  WebkitBoxReflect:
    'below -32px linear-gradient(transparent, rgba(0, 0, 0, 0.4))',

  vars: {
    [localVars.start]: '-9.3',
    [localVars.end]: '9.9',
    [localVars.s1]: '-38%',
    [localVars.s2]: '37%',
  },
})

export const root = style({
  animation: `${anim} 1.5s ease-in-out`,
  animationIterationCount: 'infinite',
  animationDirection: 'reverse',
  stroke: 'currentColor',
  strokeDasharray: 10,

  selectors: {
    '&:nth-child(2)': {
      filter: 'blur(10px)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    },
  },
})
