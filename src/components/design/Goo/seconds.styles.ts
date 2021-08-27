import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

const distX = 65
const distY = 65

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blobs: {
      filter: `url('#goo')`,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    '@keyframes blob-left-top-anim': {
      '0%': {
        transform: 'scale(1.1) translate(0, 0)',
      },
      '33%': {
        transform: `scale(0.9) translate(${-distX}px, 0)`,
      },
      '62%': {
        transform: `scale(0.7) translate(${-distX}px, ${-distY}px)`,
      },
      '100%': {
        transform: `scale(1.1) translate(0, 0)`,
      },
    },
    '@keyframes blob-left-bottom-anim': {
      '0%': {
        transform: 'scale(1.1) translate(0, 0)',
      },
      '33%': {
        transform: `scale(0.9) translate(${-distX}px, 0)`,
      },
      '62%': {
        transform: `scale(0.7) translate(${-distX}px, ${distY}px)`,
      },
      '100%': {
        transform: `scale(1.1) translate(0, 0)`,
      },
    },
    '@keyframes blob-right-bottom-anim': {
      '0%': {
        transform: 'scale(1.1) translate(0, 0)',
      },
      '33%': {
        transform: `scale(0.9) translate(${distX}px, 0)`,
      },
      '62%': {
        transform: `scale(0.7) translate(${distX}px, ${distY}px)`,
      },
      '100%': {
        transform: `scale(1.1) translate(0, 0)`,
      },
    },
    '@keyframes blob-right-top-anim': {
      '0%': {
        transform: 'scale(1.1) translate(0, 0)',
      },
      '33%': {
        transform: `scale(0.9) translate(${distX}px, 0)`,
      },
      '62%': {
        transform: `scale(0.7) translate(${distX}px, ${-distY}px)`,
      },
      '100%': {
        transform: `scale(1.1) translate(0, 0)`,
      },
    },
    blob: {
      position: 'absolute',
      background: '#e97b7a',
      left: '50%',
      top: '50%',
      width: 100,
      height: 100,
      lineHeight: '100px',
      textAlign: 'center',
      color: 'white',
      fontSize: '40px',
      borderRadius: '100%',
      marginTop: '-50px',
      marginLeft: '-50px',
      animation:
        '$blob-left-top-anim cubic-bezier(0.77, 0, 0.175, 1) 4s infinite',

      '&:nth-child(2)': {
        animationName: '$blob-right-top-anim',
      },
      '&:nth-child(3)': {
        animationName: '$blob-left-bottom-anim',
      },
      '&:nth-child(4)': {
        animationName: '$blob-right-bottom-anim',
      },
    },
  })
)

export default useStyles
