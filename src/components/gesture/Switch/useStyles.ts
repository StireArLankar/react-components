import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100vw',
      height: '100vh',
    },
    box: {
      background: 'white',
      borderRadius: 30,
      width: 150,
      height: 150,
      position: 'absolute',
      top: 'calc(50% - 150px / 2)',
      left: 'calc(50% - 150px / 2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      userSelect: 'none',
    },
    icon: {
      width: '80%',
      height: '80%',
    },
  })
)

export default useStyles
