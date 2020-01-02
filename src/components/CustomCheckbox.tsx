import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.status.danger,
      '&$checked': {
        color: theme.status.danger,
      },
    },
    checked: {},
  })
)

export const CustomCheckbox = () => {
  const classes = useStyles()

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  )
}

const theme = createMuiTheme({
  status: {
    danger: purple[500],
  },
})

export const CustomCheckboxContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox />
    </ThemeProvider>
  )
}
