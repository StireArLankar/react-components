import React from 'react'
import './App.scss'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/home'
import CircleBar from './components/circle-bar'
import SliderOne from './components/slider-one'
import SliderTwo from './components/slider-two'
import Autocomplete from './components/autocomplete'
import Lense from './components/lense'
import DndSorting from './components/dnd-sorting'
import Select from './components/select'
import Color from './components/color'
import FormFields from './components/form-fields'
import Pagination from './components/pagination'
import Intersection from './components/intersection'
import Layout from './components/layout'

const items = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    exact: true
  },
  {
    path: '/pagination',
    component: Pagination,
    title: 'Pagination'
  },
  {
    path: '/intersection',
    component: Intersection,
    title: 'Intersection'
  },
  {
    path: '/slider-one',
    component: SliderOne,
    title: 'Slider One'
  },
  {
    path: '/form-fields',
    component: FormFields,
    title: 'Form Fields'
  },
  {
    path: '/color',
    component: Color,
    title: 'Color'
  },
  {
    path: '/select',
    component: Select,
    title: 'Select'
  },
  {
    path: '/dnd-sorting',
    component: DndSorting,
    title: 'DndSorting'
  },
  {
    path: '/lense',
    component: Lense,
    title: 'Lense'
  },
  {
    path: '/autocomplete',
    component: Autocomplete,
    title: 'Autocomplete'
  },
  {
    path: '/slider-two',
    component: SliderTwo,
    title: 'Slider Two'
  },
  {
    path: '/circle-bar',
    component: CircleBar,
    title: 'Circle bar'
  }
]

const App = () => {
  const renderRoutes = () =>
    items.map((item) => <Route path={item.path} component={item.component} exact={item.exact} />)

  return (
    <Layout links={items}>
      <Switch>
        {renderRoutes()}
        <Redirect to='/' />
      </Switch>
    </Layout>
  )
}

export default App
