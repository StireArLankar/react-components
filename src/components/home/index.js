import React from 'react'
import useBGColor from '../../hook/useBGColor'

import './style.scss'

const Home = () => {
  useBGColor(145, 181, 240)
  return <h1 class="home">Hello World</h1>;
}

export default Home;