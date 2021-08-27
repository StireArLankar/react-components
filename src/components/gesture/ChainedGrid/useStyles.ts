import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      position: 'relative',
      userSelect: 'none',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 100px)',
      gridTemplateRows: 'repeat(4, 100px)',
      placeItems: 'center',
    },
    gridItem: {
      width: '95%',
      height: '95%',
      background: theme.custom.light,
      border: '1px solid #f5576c',
      display: 'grid',
      placeItems: 'center',
    },
    item: {
      width: 86,
      height: 86,
      top: 7,
      left: 7,
      position: 'absolute',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      perspective: 1000,
      borderRadius: 4,
    },
    inner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      transformStyle: 'preserve-3d',
      borderRadius: 4,
    },
    card: {
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
      transform: `rotateY(-180deg)`,
    },
    side: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      wordSpacing: 5000,
    },
  })
)

export default useStyles
