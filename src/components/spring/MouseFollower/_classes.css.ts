import { style } from '@vanilla-extract/css'

const goo = style({
  position: 'absolute',
  willChange: 'transform',
  borderRadius: '50%',
  background: 'lightcoral',
  boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
  opacity: 0.6,
  width: 100,
  height: 100,

  selectors: {
    '&::after': {
      content: "''",
      position: 'absolute',
      top: 20,
      left: 20,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.8)',
    },
  },
})

const alternativeGoo = style({
  boxShadow: 'none',
  selectors: {
    '&:after': {
      content: 'none',
    },
  },
})

export default {
  svg: style({ display: 'none' }),

  wrapper: style({
    position: 'absolute',
    width: ' 100%',
    height: '100%',
    filter: "url('#goo')",
    overflow: 'hidden',
  }),

  goo,

  alternativeGoo: style([goo, alternativeGoo]),

  lightcoral: style({
    backgroundColor: 'lightcoral',
    width: 200,
    height: 200,
    position: 'fixed',
    top: '50%',
    left: '50%',
  }),
}
