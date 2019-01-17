import React from 'react';
import './style.scss';

const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(i);
}

const Slider = ({ kee, charDict, numDict }) => {
  const number = charDict[kee] || numDict[kee];
  return (
    <ul
      className="result__slider list"
      style={{ transform: `translateY(-${number * 80}px)` }}
    >
      {Object.keys(numDict).map(key => (
        <li key={key} className="result__slide result__slide--num">
          {key}
        </li>
      ))}
      {Object.keys(charDict).map(key => {
        return (
          <li key={key} className="result__slide result__slide--char">
            {key}
          </li>
        );
      })}
    </ul>
  );
};

export default Slider;
