import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'fixed',
      paddingTop: 50,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      cursor: 'none',
      display: 'flex',
      flexDirection: 'column',
    },
    cursor: {
      width: '3rem',
      height: '3rem',
      border: '2px solid black',
      borderRadius: '50%',
      willChange: 'transform',
      position: 'fixed',
      top: 0,
      left: 0,
      margin: '-1.5rem 0 0 -1.5rem',
      zIndex: 10,
      pointerEvents: 'none',
      backdropFilter: 'grayscale(1)',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: 'white',
      minHeight: '10vh',
      padding: theme.spacing(0, 1),
      listStyle: 'none',
    },
    active: {},
    navItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(0),
      fontSize: 20,
      zIndex: 11,
      color: 'black',
      transition: 'color 0.5s ease',
      '&$active': {
        color: 'white',
      },
    },
    section: {
      flexGrow: 1,
      position: 'relative',
    },
    imgWrapper: {
      position: 'absolute',
      height: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    img: {
      objectFit: 'contain',
      height: '100%',
    },
  })
)

export default useStyles
