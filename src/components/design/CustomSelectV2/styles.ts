import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((_) =>
  createStyles({
    secondary: {},
    fit: {},

    label: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,

      '$fit &': {
        padding: `0px 12px`,
        height: '100%',
      },
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

      '$secondary &': {
        color: 'white',
        background: '#3D89EB',
      },

      transition: 'color 0.3s ease',

      '&:not(:disabled):hover, &:not(:disabled):focus': {
        color: '#6AD1F8',

        '$secondary &': {
          opacity: 0.8,
          color: 'white',
        },
      },

      '&:disabled': {
        background: '#0E1221',
      },

      '& span': {
        minWidth: '4ch',
      },

      '& svg': {
        marginLeft: 2,

        '$secondary &': {
          fill: 'white',
        },
      },
    },

    content: {
      backgroundColor: 'white',
    },

    list: {
      fontFamily: 'Noto Sans',
      padding: '16px 16px',
      margin: 0,
      listStyle: 'none',
      color: '#0E1221',
      display: 'grid',
      gridGap: 16,
      outline: 'none',
    },

    item: {
      color: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'bold',
      fontSize: 14,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },

    active: {
      color: '#3D89EB',
    },
  })
)
