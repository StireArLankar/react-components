import { style } from '@vanilla-extract/css'

export default {
  wrapper: style({ padding: `8px 16px`, width: '100%' }),

  overflow: style({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
}
