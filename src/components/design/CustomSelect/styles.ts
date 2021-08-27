import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    label: {
      background: 'none',
      padding: '6px 12px',
      margin: 0,
      color: 'black',
      border: '1px solid transparent',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      outline: 'none',
      backgroundColor: 'white',
      borderRadius: 12,

      fontSize: 14,
      fontWeight: 700,
      textTransform: 'uppercase',

      transition: 'color 0.3s ease, border-color 0.3s ease',

      '&:hover, &:focus': {
        color: 'blue',
        borderColor: 'currentColor',
      },

      '& span': {
        minWidth: '3ch',
      },

      '& svg': {
        marginLeft: 2,
      },
    },

    wrapper: {
      paddingRight: 24,
      padding: 16,
      margin: 0,
      backgroundColor: 'white',
      color: 'black',
      outline: 'none',
      boxShadow: '0px 3px 5px 3px rgba(37, 98, 132, 0.3)',
      borderRadius: 10,
      maxHeight: 100,
      overflowX: 'hidden',
      boxSizing: 'border-box',
      width: 'max-content',

      '&::-webkit-scrollbar': {
        width: 8,
      },

      '&::-webkit-scrollbar-track': {
        borderRadius: 0,
        background: 'white',
      },

      '&::-webkit-scrollbar-thumb': {
        background: 'blue',
      },
    },

    list: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      color: 'black',
      display: 'grid',
      gridGap: 16,
    },

    item: {
      whiteSpace: 'nowrap',
      color: 'inherit',

      fontFamily: 'inherit',
      fontWeight: 'bold',
      fontSize: 14,
      cursor: 'pointer',
      display: 'flex',
    },

    active: {
      color: 'darkblue',
    },
  })
)
