import React, { Fragment, PropsWithChildren } from 'react'

import Header from '../header'
import { LinkItem } from '../../../App'

import classes from './layout.module.scss'

interface LayoutProps {
  links: LinkItem[]
}

const Layout = (props: PropsWithChildren<LayoutProps>) => {
  const { links, children } = props
  return (
    <Fragment>
      <Header items={links} />
      <div className={classes.wrapper}>{children}</div>
    </Fragment>
  )
}

export default Layout
