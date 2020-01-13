import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bubble: {
      width: 100,
      height: '100%',
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
    item: {},
  })
)

export default useStyles
