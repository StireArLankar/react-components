import { ComponentProps } from 'react'

import { Link, Outlet, RootRoute } from '@tanstack/react-router'

type Props = ComponentProps<typeof Link<'/products'>>['search']

type zxc = Exclude<Props, true>

const srch: zxc = {
  filter: [{ id: 'createdAt', value: { type: 'name', value: 'asd' } }],
  sort: [{ id: 'uuid', desc: false }],
  pageIndex: 10,
}

const Root = () => (
  <>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 100px)',
        placeItems: 'center',
        padding: 8,
      }}
    >
      <Link to='/' activeProps={{ style: { color: 'red' } }}>
        Home
      </Link>
      <Link to='/about' activeProps={{ style: { color: 'red' } }}>
        About
      </Link>
      <Link
        to='/products'
        activeProps={{ style: { color: 'red' } }}
        search={{} as any}
      >
        Products
      </Link>
      <Link
        to='/products'
        activeOptions={{ includeSearch: false }}
        activeProps={{ style: { color: 'red' } }}
        search={srch as any}
      >
        Products with search
      </Link>
    </div>
    <hr />
    <Outlet />
  </>
)

export const rootRoute = new RootRoute({
  component: Root,
})
