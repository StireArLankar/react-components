import React, { useState } from 'react'
// import withBGColor from '../../hoc/withBGColor'
import useBGColor from '../../hook/useBGColor'
import Pagination from './Pagination'
import Inputs from './inputs'

import style from './pagination.module.scss'

const index = props => {
  const [ items, setItems ] = useState(80)
  const [ itemsPerPage, setItemsPerPage ] = useState(5)
  const [ currentPage, setCurrentPage ] = useState(1)

  useBGColor(210, 230, 230)

  const setPage = (number) => setCurrentPage(number)

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
        setPage={setPage}
      />
    </div>
  )
}

export default index
// export default withBGColor(220, 208, 220)(index)
