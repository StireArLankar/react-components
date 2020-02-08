import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      userSelect: 'none',
      perspective: 1000,
      position: 'relative',
      width: '100%',
    },
    inner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      transformStyle: 'preserve-3d',
    },
    card: {
      backgroundColor: theme.palette.common.white,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      willChange: 'transform',
      backfaceVisibility: 'hidden',
      overflow: 'hidden',
      borderRadius: 4,
    },
    active: {},
    back: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      transform: 'rotateY(-180deg)',
    },
    buttonInfo: {
      cursor: 'pointer',
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      background: 'transparent',
      border: 'none',
      outline: 'none',
      transition: 'all 0.2s ease',
      transform: 'scale(1)',
      color: theme.custom.orange,
      '&:hover, &:focus, &:active': {
        transform: 'scale(1.1)',
      },
    },
    buttonInfoIcon: {
      width: 18,
      height: 18,
    },
    closeIcon: {
      width: 18,
      height: 18,
    },
  })
)
