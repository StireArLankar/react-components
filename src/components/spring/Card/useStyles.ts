import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '100%',
      paddingBottom: '100%',
      background: 'grey',
      borderRadius: 5,
      boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.4)',
      transition: 'box-shadow 0.5s',
      willChange: 'transform',
      '&:hover': {
        boxShadow: '0px 30px 100px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  })
)

export default useStyles
