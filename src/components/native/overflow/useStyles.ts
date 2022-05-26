import { Theme } from '@material-ui/core/styles'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: theme.spacing(1, 2),
      width: '100%',
    },
    overflow: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    content: {},
  })
)
