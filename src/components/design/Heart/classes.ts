import { css, keyframes } from '@stitches/react'

const heartBlast = keyframes({
  from: {
    backgroundPosition: 'left',
  },
  to: {
    backgroundPosition: 'right',
  },
})

export default {
  container: css({
    position: 'relative',
    width: 100,
    height: 100,
    display: 'inline-block',
    top: 4,
  }),

  heart: css({
    position: 'absolute',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '2900%',
    height: 300,
    width: 300,
    left: '-100%',
    top: '-100%',

    variants: {
      open: {
        true: {
          animationName: heartBlast(),
          animationDuration: '.8s',
          animationIterationCount: 1,
          animationTimingFunction: 'steps(28)',
          backgroundPosition: 'right',
        },
      },
    },
  }),
}
