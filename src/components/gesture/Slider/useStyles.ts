import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      width: 200,
      height: 200,
      background: 'grey',
      borderRadius: 5,
      border: '10px solid white',
      boxSizing: 'content-box',
      overflow: 'hidden',
    },
    inner: {
      willChange: 'transform',
      height: '100%',
      width: '100%',
      userSelect: 'none',
      '&$horizontal': {
        display: 'flex',
      },
    },
    horizontal: {},
    img: {
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      flexShrink: 0,
      position: 'relative',
    },
  })
)

export default useStyles
