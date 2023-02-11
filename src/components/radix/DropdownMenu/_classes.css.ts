import { globalStyle, style } from '@vanilla-extract/css'

const item = style({
  paddingTop: '0.375rem',
  paddingBottom: '0.375rem',
  paddingLeft: '0.6rem',
  paddingRight: '0.6rem',
  color: '#374151',
  width: '10rem',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  userSelect: 'none',

  selectors: {
    '&[data-highlighted]': {
      color: '#ffffff',
      background: 'rgb(56 189 248)',
      transition: 'none',
    },
    '&[data-highlighted]:focus': {
      outline: 'none',
    },
  },
})

globalStyle(`${item} span`, {
  willChange: 'transform',
  // transform: 'scale(1.048)',
  backfaceVisibility: 'hidden',
  WebkitFontSmoothing: 'subpixel-antialiased',
  display: 'block',
})

const baseContent = style({
  marginTop: '0.25rem',
  textAlign: 'left',
  borderRadius: '0.25rem',
  position: 'relative',

  ':before': {
    content: '""',
    backdropFilter: 'blur(2px)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: '-1',

    borderRadius: '0.25rem',
    boxShadow:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    background: 'rgba(255, 255, 255, 0.90)',
  },
})

export default {
  container: style({
    overflow: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '24rem',
    borderRadius: '0.375rem',
    borderColor: '#D1D5DB',
  }),

  header: style({
    padding: '0.5rem',
    borderBottomWidth: '1px',
    borderColor: '#F3F4F6',
  }),

  caption: style({
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    textAlign: 'right',
    margin: 0,
  }),

  trigger: style({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
    background: 'none',
    opacity: 0.99,
    border: '2px solid transparent',
    outline: 'none',

    selectors: {
      '&::before, &::after': {
        boxSizing: 'inherit',
        content: '""',
        zIndex: -1,
        position: 'absolute',
        left: 0,
        top: 0,
        borderRadius: '0.25rem',
        width: '100%',
        height: '100%',
        transition: 'opacity 0.5s ease',
      },

      '&::before': {
        backgroundColor: 'rgb(56 189 248)',
        opacity: 0,
      },

      '&::after': {
        border: '2px solid black',
      },

      '&:hover::before': {
        opacity: 0.5,
      },

      '&[data-state="open"]::before': {
        opacity: 0.7,
      },

      '&:focus::before': {
        opacity: 0.5,
      },
    },
  }),

  overflow: style({
    overflow: 'auto',
    maxHeight: 'min(40vh, 200px)',
    padding: '0.5rem',
  }),

  content: baseContent,

  item,
}
