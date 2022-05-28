import { css } from '@stitches/react'

import { themeColors } from '~/theme/theme.styles'

export default {
  container: css({
    height: 400,
    width: 300,
    position: 'relative',
    overflow: 'hidden',
    userSelect: 'none',
    backgroundColor: themeColors.light,
    touchAction: 'none',
  }),

  content: css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    willChange: 'transform',
  }),

  progressWrapper: css({
    position: 'absolute',
    overflow: 'hidden',
    right: 2,
    top: 2,
    bottom: 2,
    borderRadius: 5,
    width: 5,
    backgroundColor: themeColors.dark,
  }),

  progress: css({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: themeColors.orange,
    top: '0',
    borderRadius: 5,
    transformOrigin: 'top',
    willChange: 'transform',
  }),

  counter: css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: 30,
  }),

  block: css({
    height: 100,
    width: 100,
    background: 'red',
    marginLeft: 'auto',
  }),
  spacer: css({ height: 100, width: 100 }),
}
