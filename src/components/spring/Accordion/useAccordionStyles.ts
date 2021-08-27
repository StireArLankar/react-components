import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'

export const useAccordionStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
    },
    toggle: {
      width: '100%',
      backgroundColor: 'rgb(9, 9, 80)',
      fontSize: 14,
      fontWeight: 700,
      padding: '12px 16px',
      position: 'relative',
      border: 'none',
      outline: 'none',
      display: 'flex',
      cursor: 'pointer',
      justifyContent: 'space-between',
    },
    title: {
      color: 'thistle',
      textTransform: 'uppercase',
    },
    arrow: {
      width: 27,
      transform: 'rotate(0)',
      transition: 'transform 0.3s ease',
      color: 'orange',
      '&.open': {
        transform: 'rotate(180deg)',
      },
    },
    content: {
      overflow: 'hidden',
    },
  })
)
