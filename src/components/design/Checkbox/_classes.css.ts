import { style, styleVariants, globalStyle } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const baseIndicator = style({
  display: 'flex',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
})

const checkedVariants = styleVariants({
  true: { opacity: 1 },
  false: { opacity: 0 },
})

const helper = style({
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  padding: '6px 8px',
  borderRadius: 8,
  width: '100%',
  fontWeight: 700,
  fontSize: 12,
  color: 'white',
  overflow: 'hidden',
  zIndex: 1,

  selectors: {
    '&::before': {
      boxSizing: 'inherit',
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'red',
      zIndex: 0,
      opacity: 0.8,
      borderRadius: 4,
    },
  },
})

globalStyle(`${helper} > span`, { zIndex: 1 })

export default {
  root: style({
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    boxShadow: 'inset 0 0 0 2px currentColor',
    color: 'white',
    width: 18,
    height: 18,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
    flexShrink: 0,
    outline: 'none',
    transition: 'all 0.3s ease-in-out',

    ':focus': { color: '#a3beff' },
  }),

  label: style({
    color: 'black',
    position: 'relative',
    display: 'inline-block',
    userSelect: 'none',
    fontFamily: 'Noto Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: '16px',
  }),

  indicator: recipe({
    base: baseIndicator,

    variants: { checked: checkedVariants },
  }),

  wrapper: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  }),

  helperWrapper: style({ overflow: 'hidden' }),

  helper,
}
