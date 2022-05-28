import { css, keyframes } from '@stitches/react'

const anim = keyframes({
  from: {
    strokeDashoffset: `var(--start)`,
    transform: 'translateX(var(--s1))',
  },
  to: {
    strokeDashoffset: `var(--end)`,
    transform: 'translateX(var(--s2))',
  },
})

const color = keyframes({
  '0%': { color: 'yellow' },
  '33%': { color: 'green' },
  '66%': { color: 'blue' },
  '100%': { color: 'yellow' },
})

export default {
  container: css({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    animation: `${color} 6s ease-in-out`,
    animationIterationCount: 'infinite',
    display: 'grid',
    placeItems: 'center',

    '&::before': {
      position: 'fixed',
      content: "''",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'currentColor',
      opacity: 0.15,
    },
  }),

  box: css({
    width: 200,
    position: 'relative',
    marginBottom: 40,
    '--start': -9.3,
    '--end': 9.9,
    '--s1': '-38%',
    '--s2': '37%',
    color: 'inherit',

    WebkitBoxReflect:
      'below -32px linear-gradient(transparent, rgba(0, 0, 0, 0.4))',
  }),

  root: css({
    animation: `${anim} 1.5s ease-in-out`,
    animationIterationCount: 'infinite',
    animationDirection: 'reverse',
    stroke: 'currentColor',
    strokeDasharray: 10,

    '&:nth-child(2)': {
      filter: 'blur(10px)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    },
  }),
}
