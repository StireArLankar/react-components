import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'relative',
      width: 500,
      height: 500,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },

    content: {
      position: 'absolute',
      top: 10,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1,
    },

    constrains: {
      position: 'absolute',
      width: 'calc(100% + 20px)',
      height: 'calc(100% + 20px)',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%',
    },

    svg: {
      width: 700,
      height: 700,
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      top: '50%',
      left: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      userSelect: 'none',
    },

    circle: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'red',
      marginTop: -15,
    },

    bold: {
      fontSize: 60,
      lineHeight: 1,
      fontWeight: 700,
      fontFamily: 'cursive',
    },
    regular: {
      fontSize: 60,
      lineHeight: 1,
      fontWeight: 400,
      fontFamily: 'cursive',
    },
  })
)
