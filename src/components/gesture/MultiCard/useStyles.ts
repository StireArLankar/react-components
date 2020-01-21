import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: 'relative',
      width: '20vw',
      height: '20vw',
      background: 'grey',
      borderRadius: 5,
      boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
      transition: 'box-shadow 0.5s, opacity 0.5s',
      willChange: 'transform',
      border: '10px solid white',
      cursor: 'grab',
      overflow: 'hidden',
      userSelect: 'none',

      '&.dragging': {
        cursor: 'grabbing',
      },
      '&.disabled': {
        opacity: 0.5,
        cursor: 'default',
      },
      '&:hover': {
        boxShadow: '0px 30px 100px -10px rgba(0, 0, 0, 0.4)',
      },
    },
    inner: {
      willChange: 'transform',
      height: '100%',
      margin: '0vw 0',
      '& > *': {
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        margin: '0vw 0',
      },
    },
  })
)

export default useStyles
