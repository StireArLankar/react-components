import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import classes from './header.module.scss'
import { LinkItem } from '../../../App'

interface HeaderProps {
  items: LinkItem[]
}

const Header = (props: HeaderProps) => {
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
        <Link to={item.path} className={classes.link} onClick={closeMenu}>
          {item.title}
        </Link>
      </li>
    ))

  const navClass = cn({
    [classes.nav]: true,
    [classes.open]: isOpen
  })

  const listClass = cn({
    [classes.list]: true,
    [classes.open]: isOpen,
    'custom-scroll': true
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
