import { style } from '@vanilla-extract/css'

export default {
  wrapper: style({
    position: 'relative',
    width: 400,
    height: 300,
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    background: 'grey',
  }),

  list: style({
    display: 'flex',
    position: 'relative',
    padding: 0,
    margin: 0,
    listStyle: 'none',
    height: 200,
    width: 200,
    touchAction: 'none',
  }),

  container: style({
    height: 200,
    width: 200,
    flexShrink: 0,
    display: 'grid',
    placeItems: 'center',
    willChange: 'transform',
    position: 'absolute',
    touchAction: 'none',
  }),

  img: style({
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'relative',
    height: '80%',
    width: '80%',
  }),

  text: style({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: 40,
    color: 'white',
    margin: 0,
    whiteSpace: 'nowrap',
  }),
}
