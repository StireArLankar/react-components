import React from 'react';
import './style.scss';

import Slider from './slider.js';

const Presenter = ({ array, charDict, numDict }) => {
  array.forEach(key => console.log(key));
  return (
    <ul className="result list">
      {array.map((kee, index) => (
        <li key={index} className="result__item">
          <Slider kee={kee} charDict={charDict} numDict={numDict} />
        </li>
      ))}
    </ul>
  );
};

export default Presenter;
