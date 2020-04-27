import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
    },
    list: {
      width: 350,
      borderRadius: 10,
      padding: 10,
      backgroundColor: '#fdfdfd',
      display: 'flex',
      listStyle: 'none',
      flexDirection: 'column',
    },
    item: {
      height: 50,
      width: '100%',
      borderRadius: 5,
      zIndex: 1,
      z: 1,
      position: 'relative',

      '&:not(:first-child)': {
        marginTop: theme.spacing(2),
      },
    },
  })
)
