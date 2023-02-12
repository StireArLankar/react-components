import { useMemo } from 'react'

import { Link, Route, useNavigate, useSearch } from '@tanstack/react-router'
import {
  ColumnFilter,
  ColumnFiltersState,
  ColumnSort,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  RowData,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { z } from 'zod'

import JSONPretty from '~/components/design/Json'
import TableComponent from '~/components/tanstack/table'

import { rootRoute } from './rootRoute'

declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    filter: FilterTypeToMeta
  }
}

const filterTypes = z.enum(['enum', 'name'])

const filterTypeToFilterValue = {
  enum: z.object({ type: z.literal('enum'), value: z.string() }),
  name: z.object({ type: z.literal('name'), value: z.string() }),
} satisfies Record<z.infer<typeof filterTypes>, z.ZodType>

const filterTypeToMeta = {
  enum: z.object({
    type: z.literal('enum'),
    items: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .array(),
  }),
  name: z.object({ type: z.literal('name') }),
} satisfies Record<z.infer<typeof filterTypes>, z.ZodType>

type FilterTypeToMeta = {
  [K in keyof typeof filterTypeToMeta]: z.infer<(typeof filterTypeToMeta)[K]>
}[keyof typeof filterTypeToMeta]

const includes = (value: string, array: string[]) => array.includes(value)

const filterTypeValue = z.discriminatedUnion('type', [
  filterTypeToFilterValue.enum,
  filterTypeToFilterValue.name,
])

const productItemSchema = z.object({
  id: z.number(),
  uuid: z.string(),
  externalId: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isDeleted: z.boolean(),
  isEnabled: z.boolean(),
  description: z.string().nullable(),
})

const filteredFields = z.enum(['name', 'externalId', 'createdAt'])
const sortableFields = productItemSchema.keyof()

const sortZod = z.object({
  id: sortableFields,
  desc: z.boolean(),
}) satisfies z.ZodType<ColumnSort>

const filterZod = z.object({
  id: filteredFields,
  value: filterTypeValue,
}) satisfies z.ZodType<ColumnFilter>

const productSearchSchema = z.object({
  pageIndex: z.number().catch(0),
  pageSize: z.number().catch(20),
  filter: filterZod.array().catch([]),
  sort: sortZod.array().catch([]),
})

const ProductList = () => {
  const search = useSearch({ from: allProductsRoute.id })
  const { pageIndex, pageSize, sort, filter } = search
  const navigate = useNavigate({ from: '/products' })

  const pageCount = useMemo(() => {
    return Math.ceil(100 / pageSize)
  }, [pageSize])

  const instance = useReactTable({
    data: [],
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),

    pageCount: pageCount,
    state: {
      pagination: { pageIndex, pageSize },
      sorting: sort,
      columnFilters: filter,
    },
    onColumnFiltersChange: (filters) => {
      let _filters: ColumnFiltersState

      if (typeof filters === 'function') {
        _filters = filters(filter)
      } else {
        _filters = filters
      }

      type z = z.infer<typeof productSearchSchema>['filter']

      navigate({
        to: '/products',
        search: { ...search, pageIndex: 0, filter: _filters as z },
      })
    },
    onPaginationChange: (pagination) => {
      let _pagination: PaginationState

      if (typeof pagination === 'function') {
        _pagination = pagination({ pageIndex, pageSize })
      } else {
        _pagination = pagination
      }

      if (_pagination.pageSize !== pageSize) {
        _pagination.pageIndex = 0
      }

      navigate({
        to: '/products',
        search: {
          ...search,
          pageIndex: _pagination.pageIndex,
          pageSize: _pagination.pageSize,
        },
      })
    },
    onSortingChange: (sorting) => {
      let _sorting: SortingState

      if (typeof sorting === 'function') {
        _sorting = sorting(sort)
      } else {
        _sorting = sorting
      }

      type z = z.infer<typeof productSearchSchema>['sort']

      navigate({
        to: '/products',
        search: { ...search, pageIndex: 0, sort: _sorting as z },
      })
    },
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
    enableSorting: true,
    enableMultiSort: true,
  })

  return (
    <div>
      <Link
        from={allProductsRoute.id}
        disabled={!pageCount || pageIndex <= 0}
        search={{ ...search, pageIndex: search.pageIndex - 1 }}
      >
        Prev Page
      </Link>
      <Link
        from={allProductsRoute.id}
        search={{ ...search, pageIndex: search.pageIndex + 1 }}
        disabled={!pageCount || pageIndex >= pageCount - 1}
      >
        Next Page
      </Link>

      <TableComponent instance={instance} />

      <JSONPretty json={search} />
    </div>
  )
}

export const allProductsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/products',
  validateSearch: (search) => productSearchSchema.parse(search),
  component: ProductList,
})

type ProductItem = z.infer<typeof productItemSchema>

const columnHelper = createColumnHelper<ProductItem>()

const nameColumn = columnHelper.accessor('name', {
  header: `name`,
  footer: (props) => props.column.id,
  cell: (info) => (
    <span style={{ whiteSpace: 'nowrap' }}>{info.getValue()}</span>
  ),
  enableMultiSort: true,
  enableSorting: true,
  enableColumnFilter: includes('name', filteredFields.options),

  meta: {
    filter: {
      type: 'enum',
      items: [
        { value: 'asd', label: 'asd' },
        { value: 'bsd', label: 'bsd' },
      ],
    },
  },
})

const externalIdColumn = columnHelper.accessor('externalId', {
  id: 'externalId',
  cell: (info) => (
    <span style={{ whiteSpace: 'nowrap' }}>{info.getValue()}</span>
  ),
  header: () => <span style={{ whiteSpace: 'nowrap' }}>externalId</span>,
  footer: (props) => props.column.id,
  enableSorting: false,
  enableColumnFilter: includes('externalId', filteredFields.options),

  meta: { filter: { type: 'name' } },
})

const actionsColumn = columnHelper.display({
  id: 'actions',
  header: 'actions',
  cell: (_) => {
    // console.log(`actions`, props.row);
    return <div>actions</div>
  },
})

const createdAtColumn = columnHelper.accessor('createdAt', {
  header: () => <span>createdAt</span>,
  footer: (props) => props.column.id,
  enableSorting: true,
  enableColumnFilter: includes('createdAt', filteredFields.options),

  meta: { filter: { type: 'name' } },
})

const updatedAtColumn = columnHelper.accessor('updatedAt', {
  header: 'updatedAt',
  footer: (props) => props.column.id,
  enableSorting: true,
  enableColumnFilter: includes('updatedAt', filteredFields.options),
})

const uuidColumn = columnHelper.accessor('uuid', {
  header: 'uuid',
  cell: (info) => (
    <span style={{ whiteSpace: 'nowrap' }}>{info.getValue()}</span>
  ),
  footer: (props) => props.column.id,
  enableSorting: false,
  enableColumnFilter: includes('uuid', filteredFields.options),
})

const defaultColumns = [
  actionsColumn,
  columnHelper.group({
    header: 'Name',
    footer: (props) => props.column.id,
    columns: [nameColumn, externalIdColumn],
  }),
  columnHelper.group({
    header: 'Info',
    footer: (props) => props.column.id,
    columns: [
      columnHelper.group({
        header: 'More Info',
        columns: [createdAtColumn, updatedAtColumn, uuidColumn],
      }),
    ],
  }),
]
