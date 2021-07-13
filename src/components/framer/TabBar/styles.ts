import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    exampleContainer: {
      width: '100vw',
      height: '100vh',
    },

    box: {
      background: 'white',
      borderRadius: 30,
      width: 150,
      height: 150,
      position: 'absolute',
      top: 'calc(50% - 150px / 2)',
      left: 'calc(50% - 150px / 2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    progressIcon: {
      width: '80%',
      height: '80%',
    },
  })
)
