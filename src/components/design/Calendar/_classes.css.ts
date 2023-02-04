import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { themeColors } from '~/theme/theme.styles'

const grid = style({
  display: 'grid',
  textAlign: 'center',
  gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
  gap: '0.75rem 1.25rem',
  left: 0,
  top: 0,
  width: '100%',
})

const baseItem = style({
  borderRadius: '0.5rem',
  border: 'none',
  display: 'grid',
  cursor: 'pointer',
  width: '1.5rem',
  height: '1.5rem',
  placeItems: 'center',
  color: 'white',
  background: 'transparent',
  padding: 0,
})

const todayVariants = styleVariants({
  true: { color: 'red', fontWeight: '600' },
})

const selectedVariants = styleVariants({
  true: { color: 'white', background: 'grey', fontWeight: '600' },
})

const otherMonthVariants = styleVariants({
  true: { opacity: 0.5, cursor: 'default' },
})

export default {
  container: style({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '28rem',
    background: themeColors.light,
    borderRadius: '0.5rem',
  }),

  header: style({
    display: 'flex',
    position: 'relative',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    justifyContent: 'space-between',
  }),

  control: style({
    zIndex: '10',
    borderRadius: '100%',
    background: 'transparent',
    border: 'none',
    display: 'grid',
    cursor: 'pointer',
    width: '1.5rem',
    height: '1.5rem',
    placeItems: 'center',
    color: 'white',
    padding: 0,

    ':hover': {
      backgroundColor: themeColors.main,
    },
  }),

  headerText: style({
    display: 'flex',
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    color: 'white',
  }),

  headerGrid: style([
    grid,
    {
      marginTop: '1.5rem',
      color: '#6B7280',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      marginBottom: '0.5rem',
    },
  ]),

  grid: style([
    grid,
    {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
  ]),

  itemWrapper: style({}),

  item: recipe({
    base: baseItem,
    variants: {
      selected: selectedVariants,
      today: todayVariants,
      otherMonth: otherMonthVariants,
    },
    compoundVariants: [
      {
        variants: {
          selected: true,
          today: true,
        },
        style: {
          color: 'white',
          backgroundColor: 'red',
        },
      },
      {
        variants: {
          selected: false,
          otherMonth: false,
        },
        style: {
          ':hover': { background: themeColors.main },
        },
      },
      {
        variants: {
          selected: false,
          today: true,
          otherMonth: false,
        },
        style: {
          ':hover': { background: '#692e2e' },
        },
      },
    ],
  }),
}
