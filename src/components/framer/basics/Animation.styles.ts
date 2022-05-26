import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    box: {
      background: 'white',
      borderRadius: 30,
      width: 150,
      height: 150,
    },
    button: {
      position: 'absolute',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
    },
  })
)
