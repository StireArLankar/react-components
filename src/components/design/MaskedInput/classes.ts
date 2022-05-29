import { css } from '@stitches/react'

import { themeColors } from '~/theme/theme.styles'

export default {
  container: css({
    display: 'flex',
    flexDirection: 'column',
  }),

  label: css({
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

  inputWrapper: css({
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

    '&::before': {
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

    variants: {
      focused: {
        true: {
          '&::before': {
            borderColor: themeColors.dark,
          },
        },
      },
      error: {
        true: {
          '&::before': {
            borderColor: themeColors.red,
          },
        },
      },
      disabled: {
        true: {
          '&::before': {
            opacity: 0.5,
          },
        },
      },
    },
  }),

  input: css({
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

    '&::placeholder': {
      opacity: 0.8,
    },
  }),

  children: css({
    display: 'flex',
    paddingLeft: 8,
  }),

  helper: css({
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

    '& > span': {
      zIndex: 1,
    },

    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: themeColors.red,
      zIndex: 0,
      opacity: 0.8,
      borderRadius: 4,
    },
  }),
}
