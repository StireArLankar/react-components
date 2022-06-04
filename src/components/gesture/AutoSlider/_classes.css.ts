import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

export default {
  wrapper: style({
    width: '100%',
    position: 'relative',
    height: 200,
    overflow: 'hidden',

    '@media': {
      '(min-width: 528px)': { height: 300 },
    },
  }),

  slides: style({
    height: '100%',
    width: '100%',
    display: 'flex',
    margin: 0,
    padding: 0,
    position: 'relative',
    overflow: 'hidden',
    userSelect: 'none',
    listStyle: 'none',
  }),

  item: style({
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  }),

  item2: style({
    width: '100%',
    height: '100%',
    flexShrink: 0,
    position: 'relative',
  }),

  buttonsWrapper: style({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -32px)',
    width: '100%',
    maxWidth: 768,
    height: 0,
    zIndex: 10,
    marginTop: 0,
  }),

  controls: style({
    position: 'absolute',
    display: 'flex',
    width: '100%',
    bottom: 0,
    right: 0,
    left: 0,
    background: vars.color.blue,
    height: 5,

    '@media': {
      '(min-width: 528px)': { height: 8 },
    },
  }),

  fill: style({
    backgroundColor: vars.color.darkBlue,
    height: '100%',
    width: '200%',
    position: 'absolute',
    left: '-100%',
  }),
}
