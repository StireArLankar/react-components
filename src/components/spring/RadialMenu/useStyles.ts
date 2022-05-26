import { blue, red } from '@material-ui/core/colors'
import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      height: 100,
      width: 100,
    },
    button: {
      position: 'relative',
      height: '100%',
      width: '100%',
      borderRadius: '50%',
      border: 'none',
      padding: 0,
      background: 'transparent',
      outline: 'none',
      zIndex: 1,
      transition: 'transform 0.2s ease',
      '&.central': {
        height: 100,
        width: 100,
      },
      '&:hover': {
        transform: 'scale(1.2)',
      },
    },
    overflow: {
      overflow: 'hidden',
    },
    animated: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      borderRadius: '50%',
    },
    icon: {
      width: '100%',
      height: '100%',
      color: theme.custom.text,
      '&.open': {
        backgroundColor: blue[500],
      },
      '&.close': {
        backgroundColor: red[500],
      },
    },
    list: {
      margin: 0,
      padding: 0,
      top: '50%',
      left: '50%',
      height: 50,
      width: 50,
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      listStyle: 'none',
    },
  })
)
