import { keyframes, style, createVar } from '@vanilla-extract/css'

const rotate = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const bgVar = createVar()

export default {
  wrapper: style({
    filter: 'url(#goo)',
    position: 'fixed',
    left: '50%',
    userSelect: 'none',
  }),

  planc: style({
    width: '110vw',
    maxWidth: 600,
    background: bgVar,
    transform: 'translate(-50%, 50px)',
    position: 'absolute',
    bottom: 0,
  }),

  box: style({
    borderRadius: 50,
    height: 200,
    width: 200,
    background: bgVar,
    userSelect: 'none',
    position: 'absolute',
    top: -100,
  }),

  rotation: style({
    padding: 10,
    position: 'relative',
    animationName: rotate,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  }),
}
