import React from 'react';
import './style.scss';

import Presenter from './presenter.js';

const charDict = {
  'A': 11,
  'X': 12,
  'M': 13,
  ' ': 14,
  'I': 15,
  'N': 16 
};

const numDict = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '%': 10
};

const Result = ({progress}) => {
  const array = progress === 0 ? ['M', 'I', 'N'] : progress >= 100 ? ['M', 'A', 'X'] : progress.toString().split('');

  while (array.length < 3) {
    array.unshift(' ');
  }

  if (array[0] === 'M') {
    array.push(' ');
  } else {
    array.push('%');
  }

  return <Presenter array={array} charDict={charDict} numDict={numDict}/>;
};

export default Result;
