import { keyframes, style, createVar } from '@vanilla-extract/css'

const boxShadow = `
15px 15px 20px rgba(0, 0, 0, 0.1),
-15px -15px 20px #fff,
inset -5px -5px 5px rgba(255, 255, 255, 0.5),
inset 5px 5px 5px rgba(0, 0, 0, 0.05)
`
const animate = keyframes({
  '0%': { transform: `translateY(160px)` },
  '50%': { transform: `translateY(0px)` },
  '100%': { transform: `translateY(160px)` },
})

const animate2 = keyframes({
  '0%': { filter: 'hue-rotate(180deg)' },
  '100%': { filter: 'hue-rotate(0deg)' },
})

export const iVar = createVar()

export default {
  wrapper: style({ display: 'flex' }),

  box: style({
    position: 'relative',
    width: 40,
    height: 200,
    margin: 20,
    borderRadius: 40,
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #edf1f4)`,
    boxShadow,
    border: `2px solid #edf1f4`,
    overflow: 'hidden',

    '::before': {
      boxSizing: 'inherit',
      content: `""`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 40,
      zIndex: 1,
      boxShadow,
    },

    '::after': {
      content: `""`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: 36,
      height: 36,
      background: '#fff',
      borderRadius: `50%`,
      boxShadow: `
          inset -5px -5px 5px rgba(0, 0, 0, 0.2),
          0 420px 0 400px #2196f3
        `,
      animation: `
          ${animate} 2.5s ease-in-out infinite,
          ${animate2} 5s ease-in-out infinite
        `,
      transform: 'translateY(160px)',
      animationDelay: `calc(-0.4s * ${iVar})`,
    },
  }),
}
