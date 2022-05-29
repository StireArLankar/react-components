import { css, keyframes } from '@stitches/react'

const distX = 65
const distY = 65

const leftTop = keyframes({
  '0%': {
    transform: 'scale(1.1) translate(0, 0)',
  },
  '33%': {
    transform: `scale(0.9) translate(${-distX}px, 0)`,
  },
  '62%': {
    transform: `scale(0.7) translate(${-distX}px, ${-distY}px)`,
  },
  '100%': {
    transform: `scale(1.1) translate(0, 0)`,
  },
})

const leftBottom = keyframes({
  '0%': {
    transform: 'scale(1.1) translate(0, 0)',
  },
  '33%': {
    transform: `scale(0.9) translate(${-distX}px, 0)`,
  },
  '62%': {
    transform: `scale(0.7) translate(${-distX}px, ${distY}px)`,
  },
  '100%': {
    transform: `scale(1.1) translate(0, 0)`,
  },
})

const rightBottom = keyframes({
  '0%': {
    transform: 'scale(1.1) translate(0, 0)',
  },
  '33%': {
    transform: `scale(0.9) translate(${distX}px, 0)`,
  },
  '62%': {
    transform: `scale(0.7) translate(${distX}px, ${distY}px)`,
  },
  '100%': {
    transform: `scale(1.1) translate(0, 0)`,
  },
})

const rightTop = keyframes({
  '0%': {
    transform: 'scale(1.1) translate(0, 0)',
  },
  '33%': {
    transform: `scale(0.9) translate(${distX}px, 0)`,
  },
  '62%': {
    transform: `scale(0.7) translate(${distX}px, ${-distY}px)`,
  },
  '100%': {
    transform: `scale(1.1) translate(0, 0)`,
  },
})

export default {
  blobs: css({
    filter: `url('#goo')`,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }),

  blob: css({
    position: 'absolute',
    background: '#e97b7a',
    left: '50%',
    top: '50%',
    width: 100,
    height: 100,
    lineHeight: '100px',
    textAlign: 'center',
    color: 'white',
    fontSize: '40px',
    borderRadius: '100%',
    marginTop: '-50px',
    marginLeft: '-50px',

    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',

    variants: {
      pos: {
        leftTop: { animationName: leftTop() },
        rightTop: { animationName: rightTop() },
        leftBottom: { animationName: leftBottom() },
        rightBottom: { animationName: rightBottom() },
      },
    },
  }),
}
