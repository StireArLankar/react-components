/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, MouseEvent } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import cn from 'classnames'
import queryString from 'query-string'

import style from './pagination.module.scss'

interface PaginationProps {
  itemsCount: number
  itemsPerPage: number
  currentPage: number
  setPage: (num: number) => void
}

const updateQuery = (number: number, search: string) => {
  const { query } = queryString.parseUrl(search)
  const newQuery = { ...query, page: number }
  const stringified = queryString.stringify(newQuery)
  const href = '?' + stringified
  return href
}

const Pagination = (props: PaginationProps) => {
  const { itemsCount, itemsPerPage, currentPage, setPage } = props
  const totalPages = Math.ceil(itemsCount / itemsPerPage)

  const { search } = useLocation()
  const history = useHistory()

  useEffect(() => {
    const { query } = queryString.parseUrl(search)
    if (query.page && currentPage !== +query.page) {
      setPage(+query.page)
    }
  }, [currentPage, search, setPage])

  const pushNewHistory = (number: number) => {
    const href = updateQuery(number, search)
    history.push(href)
  }

  useEffect(() => {
    const href = updateQuery(currentPage, search)
    history.replace(href)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) //FIXME

  const renderTitle = () => `Pagination with page query and pushing new instances to history`

  const renderNumberButtons = () => {
    let arr = Array.from({ length: totalPages }, (_, index) => String(index + 1))
    if (arr.length > 7) {
      if (currentPage <= 5) {
        arr = [...arr.slice(0, 7), '...', ...arr.slice(-1)]
      } else if (currentPage >= totalPages - 4) {
        arr = [...arr.slice(0, 1), '...', ...arr.slice(-7)]
      } else {
        arr = [
          ...arr.slice(0, 1),
          '...',
          ...arr.slice(currentPage - 3, currentPage + 2),
          '...',
          ...arr.slice(-1)
        ]
      }
    }

    return arr.map((page, index) => {
      const cName = cn({
        [style.item]: true,
        [style.page]: true,
        [style.active]: page === String(currentPage),
        [style.disabled]: page === '...'
      })

      return (
        <li className={cName} onClick={onNumberClick(page)} key={index}>
          <button className={style.link}>{page}</button>
        </li>
      )
    })
  }

  const onNumberClick = (number: string) => (e: MouseEvent) => {
    e.preventDefault()
    const num = Number(number)
    if (!isNaN(num)) {
      setPage(num)
      pushNewHistory(num)
    }
  }

  const onNextClick = (e: MouseEvent) => {
    e.preventDefault()
    if (currentPage < totalPages) {
      setPage(currentPage + 1)
      pushNewHistory(currentPage + 1)
    }
  }

  const renderNextButton = () => {
    const cName = cn({
      [style.item]: true,
      [style.next]: true,
      [style.disabled]: currentPage === totalPages
    })

    return (
      <li className={cName}>
        <button onClick={onNextClick} className={style.link}>
          Next
        </button>
      </li>
    )
  }

  const onPrevClick = (e: MouseEvent) => {
    e.preventDefault()
    if (currentPage > 1) {
      setPage(currentPage - 1)
      pushNewHistory(currentPage - 1)
    }
  }

  const renderPrevButton = () => {
    const cName = cn({
      [style.item]: true,
      [style.prev]: true,
      [style.disabled]: currentPage === 1
    })

    return (
      <li className={cName}>
        <button onClick={onPrevClick} className={style.link}>
          Prev
        </button>
      </li>
    )
  }

  return (
    <>
      <div className={style.bar}>
        <div>{renderTitle()}</div>
      </div>
      <div className={style.bar}>
        <ul className={style.list}>
          {renderPrevButton()}
          {renderNumberButtons()}
          {renderNextButton()}
        </ul>
      </div>
    </>
  )
}

export default Pagination
