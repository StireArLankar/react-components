import { css } from '@stitches/react'

export default {
  label: css({
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

    variants: {
      fit: {
        true: {
          padding: `0px 12px`,
          height: '100%',
        },
      },

      secondary: {
        true: {
          color: 'white',
          background: '#3D89EB',

          '& svg': {
            fill: 'white',
          },

          '&:not(:disabled):hover, &:not(:disabled):focus': {
            opacity: 0.8,
            color: 'white',
          },
        },
      },
    },
  }),

  list: css({
    fontFamily: 'Noto Sans',
    padding: '16px 16px',
    margin: 0,
    listStyle: 'none',
    color: '#0E1221',
    display: 'grid',
    gridGap: 16,
    outline: 'none',
  }),

  item: css({
    color: 'inherit',
    fontFamily: 'inherit',
    fontWeight: 'bold',
    fontSize: 14,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',

    variants: {
      active: {
        true: {
          color: '#3D89EB',
        },
      },
    },
  }),
}
