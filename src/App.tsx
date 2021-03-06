import React from 'react'
import './App.scss'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/native/home'
import CircleBar from './components/native/circle-bar'
import SliderOne from './components/native/slider-one'
import SliderTwo from './components/native/slider-two'
import Autocomplete from './components/native/autocomplete'
import Lense from './components/native/lense'
import DndSorting from './components/native/dnd-sorting'
import Select from './components/native/select'
import Color from './components/native/color'
import FormFields from './components/native/form-fields'
import Pagination from './components/native/pagination'
import Intersection from './components/native/intersection'
import Layout from './components/native/layout'
import AccordionContainer from './components/spring/Accordion/AccordionContainer'
import Toggle from './components/spring/Toggle'

export interface LinkItem {
  path: string
  component: () => JSX.Element
  title: string
  exact?: boolean
}

const items: LinkItem[] = [
  {
    path: '/',
    component: Home,
    title: 'Home',
    exact: true,
  },
  {
    path: '/pagination',
    component: Pagination,
    title: 'Pagination',
  },
  {
    path: '/intersection',
    component: Intersection,
    title: 'Intersection',
  },
  {
    path: '/slider-one',
    component: SliderOne,
    title: 'Slider One',
  },
  {
    path: '/form-fields',
    component: FormFields,
    title: 'Form Fields',
  },
  {
    path: '/color',
    component: Color,
    title: 'Color',
  },
  {
    path: '/select',
    component: Select,
    title: 'Select',
  },
  {
    path: '/dnd-sorting',
    component: DndSorting,
    title: 'DndSorting',
  },
  {
    path: '/lense',
    component: Lense,
    title: 'Lense',
  },
  {
    path: '/autocomplete',
    component: Autocomplete,
    title: 'Autocomplete',
  },
  {
    path: '/slider-two',
    component: SliderTwo,
    title: 'Slider Two',
  },
  {
    path: '/circle-bar',
    component: CircleBar,
    title: 'Circle bar',
  },
  {
    path: '/spring/accordion',
    component: AccordionContainer,
    title: 'Accordion',
  },
  {
    path: '/spring/toggle',
    component: Toggle,
    title: 'Toggle',
  },
]

const App = () => {
  const renderRoutes = () =>
    items.map((item) => (
      <Route
        key={item.path}
        path={item.path}
        component={item.component}
        exact={item.exact}
      />
    ))

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
