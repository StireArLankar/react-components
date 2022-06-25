import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const labelFitVariants = styleVariants({
  true: { padding: `0px 12px`, height: '100%' },
  false: {},
})

const labelVariants = styleVariants({
  primary: {},
  secondary: {
    color: 'white',
    background: '#3D89EB',

    selectors: {
      '& svg': { fill: 'white' },

      '&:not(:disabled):hover, &:not(:disabled):focus': {
        opacity: 0.8,
        color: 'white',
      },
    },
  },
})

const baseLabel = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 16,

  WebkitAppearance: 'none',

  background: '#FFFFFF',
  color: 'black',
  borderRadius: 12,

  flexGrow: 1,
  width: '100%',
  justifyContent: 'space-between',

  fontFamily: 'Noto Sans',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',

  fontSize: 14,
  fontWeight: 700,
  textTransform: 'uppercase',

  transition: 'color 0.3s ease',

  selectors: {
    '&:not(:disabled):hover, &:not(:disabled):focus': {
      color: '#6AD1F8',
    },

    '&:disabled': {
      background: '#0E1221',
    },

    '& span': {
      minWidth: '4ch',
    },

    '& svg': {
      marginLeft: 2,
    },
  },
})

const activeVariants = styleVariants({
  true: { color: '#3D89EB' },
  false: {},
})

const baseItem = style({
  color: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 'bold',
  fontSize: 14,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
})

export default {
  label: recipe({
    base: baseLabel,

    variants: {
      fit: labelFitVariants,
      variant: labelVariants,
    },

    defaultVariants: { variant: 'primary' },
  }),

  list: style({
    fontFamily: 'Noto Sans',
    padding: '16px 16px',
    margin: 0,
    listStyle: 'none',
    color: '#0E1221',
    display: 'grid',
    gridGap: 16,
    outline: 'none',
  }),

  item: recipe({
    base: baseItem,

    variants: { active: activeVariants },
  }),
}
