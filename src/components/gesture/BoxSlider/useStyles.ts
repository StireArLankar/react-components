import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      width: 300,
      height: 300,
      userSelect: 'none',
      display: 'grid',
      placeItems: 'center',
      background: 'grey',
    },
    stage: {
      display: 'flex',
      height: '80%',
      width: '80%',
      position: 'relative',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      transform: 'perspective(1000px)',
      transformStyle: 'preserve-3d',
    },
    container: {
      height: '100%',
      width: '100%',
      flexShrink: 0,
      position: 'absolute',
      left: 0,
      top: 0,
      transformStyle: 'preserve-3d',
    },
    img: {
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      flexShrink: 0,
      position: 'relative',
      transform: `translateZ(200px)`,
      backfaceVisibility: 'hidden',
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
