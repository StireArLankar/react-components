import React, { Fragment } from 'react'
import './App.scss'
import { Route, Switch, Link } from 'react-router-dom'
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

const App = (props) => {
  return (
    <Fragment>
      <header className="header">
        <ul className="header__list">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/pagination'>Pagination</Link></li>
          <li><Link to='/slider-one'>Slider One</Link></li>
          <li><Link to='/form-fields'>Form Fields</Link></li>
          <li><Link to='/color'>Color</Link></li>
          <li><Link to='/select'>Select</Link></li>
          <li><Link to='/dnd-sorting'>DndSorting</Link></li>
          <li><Link to='/lense'>Lense</Link></li>
          <li><Link to='/autocomplete'>Autocomplete</Link></li>
          <li><Link to='/slider-two'>Slider Two</Link></li>
          <li><Link to='/circle-bar'>Circle bar</Link></li>
        </ul>
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/circle-bar' component={CircleBar} />
        <Route path='/slider-one' component={SliderOne} />
        <Route path='/slider-two' component={SliderTwo} />
        <Route path='/autocomplete' component={Autocomplete} />
        <Route path='/lense' component={Lense} />
        <Route path='/dnd-sorting' component={DndSorting} />
        <Route path='/select' component={Select} />
        <Route path='/color' component={Color} />
        <Route path='/form-fields' component={FormFields} />
        <Route path='/pagination' component={Pagination} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Fragment>
  )
}

export default App
