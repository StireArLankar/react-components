import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

const button = style({
  padding: 0,
  position: 'relative',
  width: 80,
  height: 80,
  backgroundColor: vars.color.text,
  transform: 'perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0)',
  transition: '0.5s',
  boxShadow: '-20px 20px 10px rgba(0, 0, 0, 0.5)',
  border: 'none',
  outline: 'none',

  ':hover': {
    transform:
      'perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px)',
    boxShadow: '-50px 50px 50px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#e4405f',
  },

  selectors: {
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      backgroundColor: '#b1b1b1',
      transition: '0.5s',
    },

    '&::before': {
      top: 10,
      left: -20,
      height: '100%',
      width: 20,
      // top: '50%',
      // right: '100%',
      // height: '100%',
      // width: '100%',
      transform: 'rotate(0deg) skewY(-45deg) scale(1.01)',
    },
    '&:hover::before': {
      backgroundColor: '#d02d4c',
    },
    '&::after': {
      bottom: -20,
      left: -10,
      height: 20,
      width: '100%',
      transform: 'rotate(0deg) skewX(-45deg) scale(1.01)',
    },
    '&:hover::after': {
      backgroundColor: '#f1395c',
    },
  },
})

export default {
  button: button,

  icon: style({
    color: vars.color.main,
    lineHeight: 80,
    transition: '0.5s',
    width: '50%',
    height: '50%',
    fill: 'currentColor',

    selectors: {
      [`${button}:hover &`]: {
        color: vars.color.text,
      },
    },
  }),
}
