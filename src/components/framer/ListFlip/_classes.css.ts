import { style } from '@vanilla-extract/css'

export default {
  container: style({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  }),

  list: style({
    width: 350,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fdfdfd',
    display: 'flex',
    listStyle: 'none',
    flexDirection: 'column',
  }),

  item: style({
    height: 50,
    width: '100%',
    borderRadius: 5,
    zIndex: 1,
    position: 'relative',

    selectors: {
      '&:not(:first-child)': {
        marginTop: 16,
      },
    },
  }),
}
