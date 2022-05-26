import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      background: '#91c9f9',
      borderRadius: 16,
      height: 100,
      width: 100,
      cursor: 'grab',
      position: 'relative',
      userSelect: 'none',
    },
    inner: {
      position: 'absolute',
      background: '#41c9f2',
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 30,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    content: {
      overflow: 'hidden',
      position: 'relative',
      width: 200,
    },
  })
)

export default useStyles
