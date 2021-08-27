import React, { useEffect, useState } from 'react'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { motion, Variants } from 'framer-motion'

type Props = { helperText?: string }

const helperVariants: Variants = {
  show: {
    height: 33,
    transition: {
      delayChildren: 0.1,
    },
  },
  hide: { height: 0 },
}

const helperTextVariants: Variants = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
}

const Component = ({ helperText }: Props) => {
  const [state, setState] = useState(helperText)
  const classes = useStyles()

  useEffect(() => {
    helperText && setState(helperText)
  }, [helperText])

  return (
    <motion.div
      className={classes.helperWrapper}
      variants={helperVariants}
      initial={helperText ? 'show' : 'hide'}
      animate={helperText ? 'show' : 'hide'}
    >
      <div style={{ height: 4 }} />
      <div className={classes.helper}>
        <motion.span variants={helperTextVariants}>{state}</motion.span>
      </div>
    </motion.div>
  )
}

export default Component

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    helperWrapper: {
      overflow: 'hidden',
    },

    helper: {
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '6px 8px',
      borderRadius: 8,
      width: '100%',
      fontWeight: 700,
      fontSize: 12,
      color: 'white',
      overflow: 'hidden',
      zIndex: 1,

      '& > span': {
        zIndex: 1,
      },

      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'red',
        zIndex: 0,
        opacity: 0.8,
        borderRadius: 4,
      },
    },
  })
)
