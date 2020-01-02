import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: theme.custom.light,
    },
    bouncer: {
      width: 50,
      height: 50,
      backgroundColor: theme.custom.green,
      borderRadius: '50%',
      position: 'absolute',
    },
  })
)
