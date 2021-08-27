import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: 1200,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridGap: 50,
    },
    box: {
      minHeight: 200,
      position: 'relative',
      border: `2px solid #262626`,
      display: 'grid',
      placeItems: 'center',
      fontSize: 36,
      color: '#262626',
      textTransform: 'uppercase',
      transition: 'all 0.5s ease-in-out',
      background: '#ffef64',

      '&::before': {
        content: "''",
        position: 'absolute',
        width: 30,
        height: 30,
        background: '#ffef64',
        border: `2px solid #262626`,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        transition: 'all 0.5s ease-in-out',
      },

      '&:hover': {
        background: '#262626',
        color: 'white',
        '&::before': {
          background: '#262626',
        },
      },
    },
    bottom: {
      '&::before': {
        bottom: -15,
        transform: 'rotate(45deg)',
      },
    },
    left: {
      '&::before': {
        left: -15,
        transform: 'rotate(135deg)',
      },
    },
    right: {
      '&::before': {
        right: -15,
        transform: 'rotate(315deg)',
      },
    },
    top: {
      '&::before': {
        top: -15,
        transform: 'rotate(225deg)',
      },
    },
  })
)
