import { css } from '@stitches/react'

export default {
  grid: css({
    position: 'relative',
    userSelect: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 100px)',
    gridTemplateRows: 'repeat(4, 100px)',
    placeItems: 'center',
  }),
  gridItem: css({
    width: '95%',
    height: '95%',
    background: 'linear-gradient(-45deg, #c3cfe2 0%, #9cb8e4 100%)',
    border: '1px solid #f5576c',
    display: 'grid',
    placeItems: 'center',
  }),
  item: css({
    width: 86,
    height: 86,
    top: 7,
    left: 7,
    position: 'absolute',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  }),
  count: css({
    fontSize: 30,
    zIndex: 0,
    pointerEvents: 'none',
  }),
}
