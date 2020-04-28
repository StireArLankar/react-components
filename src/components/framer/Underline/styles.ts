import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: 'translateZ(0)',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      userSelect: 'none',
    },

    title: {
      fontSize: 32,
      marginLeft: 20,
      position: 'relative',
      cursor: 'pointer',
    },

    selected: {
      fontSize: 64,
    },

    underline: {
      width: '100%',
      height: 8,
      borderRadius: 4,
      position: 'absolute',
      bottom: '-4px',
    },
  })
)
