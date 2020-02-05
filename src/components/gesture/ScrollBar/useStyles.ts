import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: 400,
      width: 300,
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    },
    progress: {},
  })
)

export default useStyles
