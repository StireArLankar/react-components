import React, { Fragment } from 'react'
import Header from '../header'

import classes from './layout.module.scss'

const Layout = (props) => {
  const { links, children } = props
  return (
    <Fragment>
      <Header items={links} />
      <div className={classes.wrapper}>{children}</div>
    </Fragment>
  )
}

export default Layout
