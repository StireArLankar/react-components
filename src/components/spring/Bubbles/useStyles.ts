import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bubble: {
      width: '100%',
      margin: theme.spacing(0.5),
    },
    list: {
      display: 'flex',
      padding: theme.spacing(0, 1),
      margin: 0,
      listStyle: 'none',
      width: '100%',
      overflow: 'hidden',
      height: '100vh',
      maxWidth: '100vw',
      alignItems: 'center',
    },
    item: {
      overflow: 'hidden',
      height: '100%',
      width: 100,
      display: 'flex',
      alignItems: 'center',
    },
  })
)

export default useStyles
