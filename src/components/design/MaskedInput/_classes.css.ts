import { style, styleVariants, globalStyle } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '~/theme/theme.css'

const helper = style({
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 'calc(100% + 6px)',
  padding: '6px 8px',
  borderRadius: 8,
  width: 'calc(100% + 4px)',
  left: '-2px',
  fontWeight: 700,
  fontSize: 12,
  minHeight: 29,
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
      backgroundColor: vars.color.red,
      zIndex: 0,
      opacity: 0.8,
      borderRadius: 4,
    },
  },
})

globalStyle(`${helper} > span`, { zIndex: 1 })

const focusedVariants = styleVariants({
  true: { '::before': { borderColor: vars.color.dark } },
  false: {},
})

const errorVariants = styleVariants({
  true: { '::before': { borderColor: vars.color.red } },
  false: {},
})

const disabledVariants = styleVariants({
  true: { opacity: 0.5 },
  false: {},
})

const baseInputWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  padding: 2,

  marginTop: 4,
  outline: 'none',
  fontWeight: 700,

  borderRadius: 12,

  fontSize: 14,
  fontFamily: 'inherit',
  border: '2px solid transparent',
  transition: 'all 0.3s ease-in-out',

  selectors: {
    '&::before': {
      boxSizing: 'inherit',
      content: '""',
      borderRadius: 12,
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      background: 'white',
      border: '2px solid white',
      transition: 'all 0.3s ease-in-out',
    },
  },
})

export default {
  container: style({ display: 'flex', flexDirection: 'column' }),

  label: style({
    paddingLeft: 8,
    color: 'white',
    fontFamily: 'inherit',
    fontSize: 12,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    fontStyle: 'normal',
    lineHeight: '16px',
  }),

  inputWrapper: recipe({
    base: baseInputWrapper,
    variants: {
      focused: focusedVariants,
      error: errorVariants,
      disabled: disabledVariants,
    },
  }),

  input: style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 12,
    padding: `8px 6px`,
    margin: 0,
    flexGrow: 1,
    minWidth: 0,
    flexBasis: 0,
    width: '100%',
    outline: 'none',
    border: 'none',
    zIndex: 1,

    background: 'transparent',

    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '19px',
    letterSpacing: '0em',

    selectors: {
      '&::placeholder': { opacity: 0.8 },
    },
  }),

  children: style({ display: 'flex', paddingLeft: 8 }),

  helper,
}
