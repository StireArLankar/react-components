import { useEffect, useRef, useState } from 'react'

import { SortDirection, Table, flexRender, Column } from '@tanstack/react-table'

import CustomSelectV2 from '~/components/design/CustomSelectV2'
import ScrollAreaDemo from '~/components/radix/ScrollArea'

const sortDirToIcon = (dir: false | SortDirection) => {
  switch (dir) {
    case false:
      return null

    case 'asc':
      return ' 🔼'

    case 'desc':
      return ' 🔽'

    default:
      ;((_: never) => {})(dir)
      return null
  }
}

export default <T,>({ instance }: { instance: Table<T> }) => (
  <>
    <ScrollAreaDemo
      style={{
        display: 'block',
        maxWidth: '100%',
        flexGrow: 1,
        flexBasis: 0,
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'block',
          maxWidth: '100%',
          paddingBottom: 10,
        }}
      >
        <table style={{ width: '100%' }}>
          {/* <table style={{ width: "100%" }}> */}
          <thead>
            {instance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ textAlign: 'center', verticalAlign: 'baseline' }}
                  >
                    {header.isPlaceholder ? (
                      <div>
                        <span style={{ color: 'transparent' }}>a</span>
                      </div>
                    ) : (
                      <div>
                        <div
                          {...{
                            style: header.column.getCanSort()
                              ? { cursor: 'pointer', userSelect: 'none' }
                              : undefined,
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {sortDirToIcon(header.column.getIsSorted())}
                        </div>
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={instance} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {instance.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {/* <tfoot>
          {instance.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot> */}
        </table>
      </div>
    </ScrollAreaDemo>

    <ScrollAreaDemo>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: 10,
        }}
      >
        <button
          className='border rounded p-1'
          onClick={() => instance.setPageIndex(0)}
          disabled={!instance.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => instance.previousPage()}
          disabled={!instance.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => instance.nextPage()}
          disabled={!instance.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
          disabled={!instance.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            whiteSpace: 'nowrap',
          }}
        >
          <div>Page</div>
          <strong>
            {instance.getState().pagination.pageIndex + 1} of{' '}
            {instance.getPageCount()}
          </strong>
        </span>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            whiteSpace: 'nowrap',
          }}
        >
          | Go to page:
          <input
            type='number'
            defaultValue={instance.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              instance.setPageIndex(page)
            }}
            className='border p-1 rounded w-16'
          />
        </span>
        <select
          value={instance.getState().pagination.pageSize}
          onChange={(e) => {
            instance.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </ScrollAreaDemo>
  </>
)

type FilterProps<TData> = {
  column: Column<TData, unknown>
  table: Table<TData>
}

function Filter<TData>({ column, table }: FilterProps<TData>) {
  const columnFilterValue: any = column.getFilterValue()

  const zxc = column.columnDef.meta?.filter

  switch (zxc?.type) {
    case 'name':
      return (
        <DebouncedInput
          type='text'
          id={column.id}
          value={columnFilterValue?.value ?? ''}
          onChange={(value) =>
            column.setFilterValue(value ? { type: 'name', value } : undefined)
          }
        />
      )
    case 'enum':
      return (
        <CustomSelectV2
          fit
          items={zxc.items}
          value={columnFilterValue?.value ?? ''}
          onChange={(value) =>
            column.setFilterValue(value ? { type: 'enum', value } : undefined)
          }
        />
      )
  }

  return (
    <>
      <DebouncedInput
        type='text'
        value={(columnFilterValue ?? '') as string}
        onChange={(value) => column.setFilterValue(value)}
        list={column.id + 'list'}
      />
      <div className='h-1' />
    </>
  )
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    const timeout = setTimeout(() => {
      onChangeRef.current(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value, debounce])

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
