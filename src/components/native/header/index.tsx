import React, { useState, useEffect } from 'react'

import clsx from 'clsx'

import classes from './header.module.scss'

export interface HeaderProps {
  items: LinkItem[]
}

interface LinkItem {
  path: string
  component: () => JSX.Element
  title: string
  exact?: boolean
}

export const Header = (props: HeaderProps) => {
  const { items } = props

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow')
    } else {
      document.body.classList.remove('overflow')
    }
  }, [isOpen])

  const renderLinks = () =>
    items.map((item) => (
      <li key={item.title} className={classes.item}>
        <a href={item.path} className={classes.link} onClick={closeMenu}>
          {item.title}
        </a>
      </li>
    ))

  const navClass = clsx({
    [classes.nav]: true,
    [classes.open]: isOpen,
  })

  const listClass = clsx({
    [classes.list]: true,
    [classes.open]: isOpen,
    'custom-scroll': true,
  })

  return (
    <header className={classes.wrapper}>
      <nav className={navClass}>
        <div className={classes.btnWrapper}>
          <button className={classes.toggler} onClick={toggleMenu}>
            Menu
          </button>
        </div>
        <ul className={listClass}>{renderLinks()}</ul>
      </nav>
    </header>
  )
}

export default Header
