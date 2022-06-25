import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const item = style({
  position: 'absolute',
  fontSize: '1.5em',
  width: '10em',
  height: '10em',
  transformOrigin: '100% 100%',
  overflow: 'hidden',
  left: '50%',
  top: '50%',
  marginTop: '-1.3em',
  marginLeft: '-10em',
  transition: 'border .3s ease',
})

const activeVariants = styleVariants({
  true: {},
  false: {},
})

const listWrapper = style({
  fontSize: '1em',
  width: '26em',
  height: '26em',
  overflow: 'hidden',
  position: 'fixed',
  zIndex: 10,
  bottom: '-13em',
  left: '50%',
  borderRadius: '50%',
  marginLeft: '-13em',
  transform: 'scale(0.1)',
  pointerEvents: 'none',
  transition: 'all .3s ease',
})

const openVariants = styleVariants({
  true: { borderRadius: '50%', pointerEvents: 'auto', transform: 'scale(1)' },
  false: {},
})

const wrapper = style({ position: 'relative' })

globalStyle(`${wrapper} *`, { outline: 'none' })

export default {
  wrapper,

  button: style({
    border: 'none',
    background: 'none',
    color: '#f06060',
    textAlign: 'center',
    fontSize: '1.8em',
    paddingBottom: '1em',
    height: '3.5em',
    width: '3.5em',
    backgroundColor: '#fff',
    position: 'fixed',
    left: '50%',
    marginLeft: '-1.75em',
    bottom: '-1.75em',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 11,
    transform: 'translate3d(0, 0, 0)',

    selectors: {
      '&:hover, &:active, &:focus': {
        color: '#aa1010',
      },
    },
  }),

  listWrapper: recipe({
    base: listWrapper,
    variants: { open: openVariants },
  }),

  list: style({
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    position: 'relative',
  }),

  item: recipe({
    base: item,
    variants: { active: activeVariants },
    defaultVariants: { active: false },
  }),

  itemButton: style({
    color: '#fff',
    right: '-7.25em',
    width: '14.5em',
    bottom: '-7.25em',
    height: '14.5em',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    fontSize: '1.18em',
    transition: 'opacity 0.3s, color 0.3s',
    paddingTop: '1.8em',
    borderRadius: '50%',
    textDecoration: 'none',
    backfaceVisibility: 'hidden',
    alignItems: 'center',

    selectors: {
      [`${item}:nth-child(odd) &`]: {
        backgroundColor: 'hsla(0, 88%, 63%, 1)',
      },
      [`${item}:nth-child(even) &`]: {
        backgroundColor: 'hsla(0, 88%, 65%, 1)',
      },
      [`${activeVariants.true} &`]: {
        backgroundColor: 'hsla(0, 88%, 70%, 1)',
      },
      [`${activeVariants.false} &:hover`]: {
        backgroundColor: 'hsla(0, 88%, 70%, 1)',
      },
      [`${activeVariants.false} &:focus`]: {
        backgroundColor: 'hsla(0, 88%, 70%, 1)',
        position: 'fixed',
      },
      [`${activeVariants.false} &:active`]: {
        backgroundColor: 'hsla(0, 88%, 70%, 1)',
      },
    },
  }),

  icon: style({
    fontSize: '1.1em',
    opacity: 0.7,
    display: 'inline-block',
    width: '1.25em',
    textAlign: 'center',
    fill: 'currentColor',
  }),
}
