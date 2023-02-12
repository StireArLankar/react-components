import {
  createMemoryHistory,
  ReactRouter,
  Route,
  RouterProvider,
} from '@tanstack/react-router'

import { allProductsRoute } from './ProductList'
import { rootRoute } from './rootRoute'

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  )
}

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

function About() {
  return <div>Hello from About!</div>
}

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  allProductsRoute,
])

// Create the router using your route tree
const router = new ReactRouter({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const history = createMemoryHistory()

export default () => <RouterProvider router={router} history={history} />
