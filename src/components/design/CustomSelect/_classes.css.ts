import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const baseItem = style({
  whiteSpace: 'nowrap',
  color: 'inherit',

  fontFamily: 'Roboto, sans-serif',
  fontWeight: 'bold',
  fontSize: 14,
  cursor: 'pointer',
  display: 'flex',
})

const activeVariants = styleVariants({
  true: { color: 'darkblue' },
  false: {},
})

const label = style({
  background: 'none',
  padding: '6px 12px',
  margin: 0,
  color: 'black',
  border: '1px solid transparent',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  outline: 'none',
  backgroundColor: 'white',
  borderRadius: 12,

  fontSize: 14,
  fontWeight: 700,
  textTransform: 'uppercase',

  transition: 'color 0.3s ease, border-color 0.3s ease',

  selectors: {
    '&:hover, &:focus': {
      color: 'blue',
      borderColor: 'currentColor',
    },
  },
})

globalStyle(`${label} span`, { minWidth: '3ch' })
globalStyle(`${label} svg`, { marginLeft: 2 })

export default {
  label,

  wrapper: style({
    paddingRight: 24,
    padding: 16,
    margin: 0,
    backgroundColor: 'white',
    color: 'black',
    outline: 'none',
    boxShadow: '0px 3px 5px 3px rgba(37, 98, 132, 0.3)',
    borderRadius: 10,
    maxHeight: 100,
    overflowX: 'hidden',
    boxSizing: 'border-box',
    width: 'max-content',

    selectors: {
      '&::-webkit-scrollbar': { width: 8 },

      '&::-webkit-scrollbar-track': {
        borderRadius: 0,
        background: 'white',
      },

      '&::-webkit-scrollbar-thumb': { background: 'blue' },
    },
  }),

  list: style({
    padding: 0,
    margin: 0,
    listStyle: 'none',
    color: 'black',
    display: 'grid',
    gridGap: 16,
  }),

  item: recipe({
    base: baseItem,
    variants: { active: activeVariants },
  }),
}
