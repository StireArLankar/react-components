import React from 'react'
import style from './intersection.module.scss'
import cn from 'classnames'
import useIntersectionObserver from '../../hook/useIntersectionObserver'

const ListItem = (props) => {
  const [isIntersecting, ref] = useIntersectionObserver()

  const className = cn({
    [style.imgWrapper]: true,
    [style.enter]: isIntersecting,
    [style.leave]: !isIntersecting
  })

  return (
    <li className={className} ref={ref}>
      <img src={props.url} className={style.img} alt='Some alt text' />
    </li>
  )
}

export default ListItem
