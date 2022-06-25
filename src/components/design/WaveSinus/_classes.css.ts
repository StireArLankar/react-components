import { style, keyframes } from '@vanilla-extract/css'

export const size = 120
export const color = '#ffab00'

const motion = keyframes({
  '0%': { transform: 'translateY(55%)' },
  '50%': { transform: 'translateY(5%)' },
  '100%': { transform: 'translateY(55%)' },
})

const skew = keyframes({
  '0%': { transform: 'skewY(0deg)' },
  '25%': { transform: 'skewY(-40deg)' },
  '50%': { transform: 'skewY(0deg)' },
  '75%': { transform: 'skewY(40deg)' },
  '100%': { transform: 'skewY(0deg)' },
})

export default {
  wrapper: style({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: size * 2.5,
    height: size,
    overflow: 'hidden',
  }),

  bar: style({
    position: 'absolute',
    top: 10,
    width: size / 10,
    height: '150%',
    transform: 'translateY(55%)',
    animation: `${motion} 1.25s ease-in-out infinite`,
  }),

  barInner: style({
    width: '100%',
    height: '100%',
    transform: 'skewY(0deg)',
    backgroundColor: color,
    animation: `${skew} 1.25s ease-in-out infinite`,
  }),
}
