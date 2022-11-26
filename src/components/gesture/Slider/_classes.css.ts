import { style } from '@vanilla-extract/css'

const baseContent = style({
  willChange: 'transform',
  height: '100%',
  width: '100%',
  userSelect: 'none',
})

export default {
  wrapper: style({
    position: 'relative',
    width: 200,
    height: 200,
    background: 'grey',
    borderRadius: 5,
    border: '10px solid white',
    boxSizing: 'content-box',
    overflow: 'hidden',
    touchAction: 'none',
  }),

  inner: baseContent,

  horizontal: style([baseContent, { display: 'flex' }]),

  img: style({
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    flexShrink: 0,
    position: 'relative',
  }),
}
