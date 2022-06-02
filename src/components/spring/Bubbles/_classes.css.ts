import { style } from '@vanilla-extract/css'

export default {
  bubble: style({ width: '100%', margin: 4 }),

  list: style({
    display: 'flex',
    padding: `0 8px`,
    margin: 0,
    listStyle: 'none',
    width: '100%',
    overflow: 'hidden',
    height: '100vh',
    maxWidth: '100vw',
    alignItems: 'center',
  }),

  item: style({
    overflow: 'hidden',
    height: '100%',
    width: 100,
    display: 'flex',
    alignItems: 'center',
  }),
}
