import { style } from '@vanilla-extract/css'

const title = style({
  fontFamily: 'inherit',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 14,
  textAlign: 'center',
  width: '100%',
  color: 'white',
  padding: '16px 0px',
  position: 'relative',
  outline: 'none',
  transition: 'color 0.3s ease',

  selectors: {
    '&:hover, &:focus': {
      color: '#6ad1f8',
    },
  },
})

export default {
  card: style({
    position: 'relative',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px',
    minWidth: 0,
    zIndex: 1,
    width: '100%',
    borderRadius: 20,
    boxShadow:
      '0px 0 0px 1px rgba(37, 98, 132, 0.4), -1px -1px 0px 1px rgba(255, 255, 255, 0.6)',

    '@media': {
      '(min-width: 768px)': {
        '::before': {
          filter: 'drop-shadow(0px 10px 100px rgba(37, 98, 132, 0.4))',
        },
      },
    },

    '::before': {
      boxSizing: 'inherit',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      background:
        'linear-gradient(145.92deg, rgba(61, 137, 235, 0.8) 0%, rgba(61, 137, 235, 0) 100%)',
      backdropFilter: 'blur(5px)',
      borderRadius: 20,
    },
  }),

  center: style({
    display: 'grid',
    gridTemplateColumns: '1fr min(60ch, 100%) 1fr',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minWidth: 0,
    width: '100%',

    selectors: {
      '& > *': {
        gridColumn: '2/-2',
      },

      '& *': {
        textAlign: 'inherit',
      },
    },

    '@media': {
      '(min-width: 768px)': {
        textAlign: 'left',
      },
    },
  }),

  subtitle: style({
    margin: '16px 0 0',
    color: 'white',
    opacity: 0.8,
    fontSize: 18,
  }),

  list: style({
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translateZ(0)',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    userSelect: 'none',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }),

  title,

  underline: style({
    width: '100%',
    height: 2,
    position: 'absolute',
    bottom: 0,
    color: 'white',
    transition: 'color 0.3s ease',
    backgroundColor: 'currentColor',
  }),

  contentList: style({ display: 'grid' }),

  item: style({ padding: 16, color: 'white' }),
}
