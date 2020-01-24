import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    simple: {},
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
    },
    container: {
      height: 200,
      width: 200,
      flexShrink: 0,
      display: 'grid',
      placeItems: 'center',
    },
    img: {
      height: '90%',
      width: '90%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      position: 'relative',
    },
    values: {
      display: 'flex',
      position: 'absolute',
      top: '100%',
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
    value: {
      color: 'white',
      margin: theme.spacing(0.5),
    },
  })
)

export default useStyles
