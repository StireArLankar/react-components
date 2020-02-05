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
      userSelect: 'none',
      backgroundColor: theme.custom.light,
    },
    content: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      willChange: 'transform',
    },
    progressWrapper: {
      position: 'absolute',
      overflow: 'hidden',
      right: 2,
      top: 2,
      bottom: 2,
      borderRadius: 5,
      width: 5,
      backgroundColor: theme.custom.dark,
    },
    progress: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: theme.custom.orange,
      top: '0',
      borderRadius: 5,
      transformOrigin: 'top',
      willChange: 'transform',
    },
    counter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: 30,
    },
  })
)

export default useStyles
