import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    simple: {},
    wrapperBig: {
      position: 'relative',
      width: 400,
      height: 300,
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      background: 'grey',
    },
    wrapper: {
      position: 'relative',
      width: 300,
      height: 300,
      userSelect: 'none',
      display: 'grid',
      placeItems: 'center',
      background: 'grey',
      '&$simple': {
        overflow: 'hidden',
      },
    },
    list: {
      display: 'flex',
      position: 'relative',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      '$simple &': {
        marginLeft: 55,
      },
      '$wrapperBig &': {
        height: 200,
        width: 200,
      },
    },
    container: {
      height: 200,
      width: 200,
      flexShrink: 0,
      display: 'grid',
      placeItems: 'center',
      willChange: 'transform',
      '$wrapperBig &': {
        position: 'absolute',
      },
    },
    img: {
      height: '90%',
      width: '90%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      position: 'relative',
      '$wrapperBig &': {
        height: '80%',
        width: '80%',
      },
    },
    text: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: 40,
      color: 'white',
      margin: 0,
      whiteSpace: 'nowrap',
    },
  })
)

export default useStyles
