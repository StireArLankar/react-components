import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontSize: 30,
      color: theme.custom.text,
    },
    char: {
      display: 'inline-block',
      minWidth: 8,
      willChange: 'transform',
      letterSpacing: '0.1em',
    },
  })
)
