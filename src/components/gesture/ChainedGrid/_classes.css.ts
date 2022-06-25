import { style } from '@vanilla-extract/css'

import { vars } from '~/theme/theme.css'

const baseCard = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  willChange: 'transform',
  backfaceVisibility: 'hidden',
  overflow: 'hidden',
  borderRadius: 4,
})

const backCardStyle = style({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  transform: `rotateY(-180deg)`,
})

export default {
  grid: style({
    position: 'relative',
    userSelect: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 100px)',
    gridTemplateRows: 'repeat(4, 100px)',
    placeItems: 'center',
  }),

  gridItem: style({
    width: '95%',
    height: '95%',
    background: vars.color.light,
    border: '1px solid #f5576c',
    display: 'grid',
    placeItems: 'center',
  }),

  item: style({
    width: 86,
    height: 86,
    top: 7,
    left: 7,
    position: 'absolute',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    perspective: 1000,
    borderRadius: 4,
    touchAction: 'none',
  }),

  inner: style({
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transformStyle: 'preserve-3d',
    borderRadius: 4,
  }),

  frontCard: baseCard,
  backCard: style([baseCard, backCardStyle]),

  side: style({
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    textAlign: 'center',
    wordSpacing: 5000,
  }),
}
