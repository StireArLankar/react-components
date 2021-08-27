import React, { useState } from 'react'

import useBGColor from 'hook/useBgColor'
import Inputs from './inputs'
import Pagination from './Pagination'
import style from './pagination.module.scss'

export const PaginationContainer = () => {
  const [items, setItems] = useState(80)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)

  useBGColor(210, 230, 230)

  return (
    <div className={style.wrapper}>
      <Inputs
        items={items}
        setItems={setItems}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
      <Pagination
        itemsCount={items}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  )
}

export default PaginationContainer
