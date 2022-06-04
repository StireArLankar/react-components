import { style } from '@vanilla-extract/css'

const wrapperBig = style({
  position: 'relative',
  width: 400,
  height: 300,
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  background: 'grey',
  touchAction: 'pan-y',
})

const wrapper = style({
  position: 'relative',
  width: 300,
  height: 300,
  userSelect: 'none',
  display: 'grid',
  placeItems: 'center',
  background: 'grey',
  overflow: 'hidden',
})

export default {
  wrapperBig,
  wrapper,

  list: style({
    display: 'flex',
    position: 'relative',
    padding: 0,
    margin: 0,
    listStyle: 'none',

    selectors: {
      [`${wrapper} &`]: { marginLeft: 55 },
      [`${wrapperBig} &`]: { height: 200, width: 200 },
    },
  }),

  container: style({
    height: 200,
    width: 200,
    flexShrink: 0,
    display: 'grid',
    placeItems: 'center',
    willChange: 'transform',
    selectors: {
      [`${wrapperBig} &`]: { position: 'absolute' },
    },
  }),

  img: style({
    height: '90%',
    width: '90%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',

    selectors: {
      [`${wrapperBig} &`]: { height: '80%', width: '80%' },
    },
  }),

  values: style({
    display: 'flex',
    position: 'absolute',
    top: '100%',
    padding: 0,
    margin: 0,
    listStyle: 'none',

    selectors: {
      [`${wrapperBig} &`]: { top: 'auto', bottom: 0 },
    },
  }),

  value: style({
    color: 'white',
    margin: 4,
  }),
}
