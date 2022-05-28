import { css } from '@stitches/react'

import { themeColors } from '~/theme/theme.styles'

export default {
  wheel: css({
    borderRadius: '50%',
    height: 120,
    width: 120,
    zIndex: 10000,
    cursor: 'grab',
    touchAction: 'none',
  }),

  svg: css({
    width: '100%',
    height: '100%',
    color: themeColors.border,
  }),

  list: css({
    position: 'absolute',
    padding: 0,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-around',
    height: '80vh',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `calc(100% - 300px)`,
    listStyle: 'none',
    overflow: 'hidden',
  }),

  item: css({
    height: '100%',
    width: 20,
    transformOrigin: 'bottom',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.8,

    '&:nth-child(5n)': {
      background: 'linear-gradient(180deg, #f093fb 0%, #f5576c 100%)',
    },
    '&:nth-child(5n + 1)': {
      background: 'linear-gradient(180deg, #a8edea 0%, #fed6e3 100%)',
    },
    '&:nth-child(5n + 2)': {
      background: 'linear-gradient(180deg, #d299c2 0%, #fef9d7 100%)',
    },
    '&:nth-child(5n + 3)': {
      background: 'linear-gradient(180deg, #ebc0fd 0%, #d9ded8 100%)',
    },
    '&:nth-child(5n + 4)': {
      background: 'linear-gradient(180deg, #f6d365 0%, #fda085 100%)',
    },
  }),
}
