import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    svg: {
      display: 'none',
    },
    wrapper: {
      position: 'absolute',
      width: ' 100%',
      height: '100%',
      filter: "url('#goo')",
      overflow: 'hidden',
    },
    goo: {
      'position': 'absolute',
      'willChange': 'transform',
      'borderRadius': '50%',
      'background': 'lightcoral',
      'boxShadow': '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
      'opacity': 0.6,
      'width': 100,
      'height': 100,

      '&::after': {
        content: "''",
        position: 'absolute',
        top: 20,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.8)',
      },
    },
  })
)
