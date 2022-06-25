import { style } from '@vanilla-extract/css'

export default {
  frame: style({
    position: 'relative',
    padding: '4px 0px 0px 0px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    verticalAlign: 'middle',
    color: 'white',
    fill: 'white',
    fontSize: 14,
  }),

  title: style({
    verticalAlign: 'middle',
  }),

  content: style({
    willChange: 'transform, opacity, height',
    marginLeft: 7,
    padding: '0px 0px 0px 14px',
    borderLeft: '1px dashed rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
  }),

  toggle: style({
    width: 15,
    height: 15,
    marginRight: 10,
    cursor: 'pointer',
    verticalAlign: 'middle',
    userSelect: 'none',
  }),
}
