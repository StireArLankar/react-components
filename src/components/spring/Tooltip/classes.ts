import { css } from '@stitches/react'

import { themeColors } from '~/theme/theme.styles'

const popup = css({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  width: '100%',

  variants: {
    side: {
      top: {
        bottom: `100%`,
        paddingBottom: 12,
      },
      bottom: {
        top: `100%`,
        paddingTop: 12,
      },
    },
  },
})

export default {
  popup,

  content: css({
    borderRadius: 4,
    color: themeColors.text,
    background: themeColors.light,
    boxShadow: '0 3px 10px 0 rgba(0,0,0,0.2)',
    textAlign: 'center',
    fontSize: 14,
    padding: `16px 24px`,
    border: `1px solid hsla(0,0%,100%,.1)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',

    '&::before': {
      content: "''",
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      border: `10px solid transparent`,
    },

    variants: {
      side: {
        top: {
          '&::before': {
            top: 'calc(100% - 1px)',
            borderBottomWidth: 0,
            borderTopColor: themeColors.light,
          },
        },
        bottom: {
          '&::before': {
            bottom: 'calc(100% - 1px)',
            borderTopWidth: 0,
            borderBottomColor: themeColors.light,
          },
        },
      },
    },
  }),
}
