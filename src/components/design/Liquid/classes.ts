import { css, keyframes, styled } from '@stitches/react'

import { themeColors } from '~/theme/theme.styles'

const animate = keyframes({
  from: {
    transform: 'translate(-50%, -75%) rotate(deg)',
  },
  to: {
    transform: 'translate(-50%, -75%) rotate(360deg)',
  },
})

export default {
  Button: styled('button', {
    position: 'relative',
    padding: `16px 40px`,
    textDecoration: 'none',
    textTransform: 'uppercase',
    overflow: 'hidden',
    display: 'flex',
    border: 'none',
    outline: 'none',
  }),

  text: css({
    position: 'relative',
    zIndex: 1,
    color: themeColors.text,
    fontSize: 20,
    letterSpacing: 8,
    flexGrow: 1,
    pointerEvents: 'none',
    userSelect: 'none',
  }),

  liquid: css({
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    paddingTop: '100%',
    backgroundColor: '#4973ff',
    boxShadow: 'inset 0px 0px 50px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.5s ease',
    transform: 'translateY(40%)',

    '&:hover': {
      transform: 'translateY(0px)',
    },

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      width: '200%',
      paddingTop: '200%',
      top: 0,
      left: '50%',
      transform: 'translate(-50%, -75%)',
    },
    '&::before': {
      borderRadius: '45%',
      background: 'rgba(20, 20, 20, 1)',
      animation: `${animate} 5s linear infinite`,
    },
    '&::after': {
      borderRadius: '40%',
      background: 'rgba(20, 20, 20, 0.5)',
      animation: `${animate} 10s linear infinite`,
    },
  }),
}
