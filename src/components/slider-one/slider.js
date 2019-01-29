import React, { Component, Fragment } from 'react';

class Slider extends Component {
  onTransitionEnd = evt => {
    // console.log(evt);
    this.props.onComplete();
  };

  temp = 0;
  list = [this.props.components.length - 1, 0, 1, 2];

  incLastElement = (array, componentsLength, listLength) => {
    // ищем минимальный индекс в массиве
    const indexOfLast = this.findIndexOfLastElement(array, componentsLength, listLength);
    // ищем максимальный индекс в массиве
    const indexOfFirst = this.findIndexOfFirstElement(array, componentsLength, listLength);
    // ищем "максимальное значение"
    const increasedElement = this.incElement(array[indexOfFirst], componentsLength);
    // возвращаем массив, у которого на месте минимального индекса стоит максимальный
    let temp = [...array];
    temp.splice(indexOfLast, 1, increasedElement);
    return temp;
  }

  decFirstElement = (array, componentsLength, listLength) => {
    const indexOfLast = this.findIndexOfLastElement(array, componentsLength, listLength);
    const indexOfFirst = this.findIndexOfFirstElement(array, componentsLength, listLength);
    const decreasedElement = this.decElement(array[indexOfLast], componentsLength);
    let temp = [...array];
    temp.splice(indexOfFirst, 1, decreasedElement);
    return temp;
  }

  incElement = (elementValue, componentsLength) => {
    const maxValue = componentsLength - 1;
    return elementValue === maxValue ? 0 : elementValue + 1;
  }

  decElement = (elementValue, componentsLength) => {
    const maxValue = componentsLength - 1;
    return elementValue === 0 ? maxValue : elementValue - 1;
  }

  findIndexOfFirstElement = (array, componentsLength, listLength) => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const diff = max - min;
    const listDiff = listLength - 1; // 3
    if (diff !== listDiff) {
      const indexOfMin = array.indexOf(min);
      let list = [...array];
      list.splice(indexOfMin, 1, min + componentsLength);
      return this.findIndexOfFirstElement(list, componentsLength, listLength);
    } else {
      return array.indexOf(max);
    }
  }

  findIndexOfLastElement = (array, componentsLength, listLength) => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const diff = max - min;
    const listDiff = listLength - 1; // 3
    if (diff !== listDiff) {
      const indexOfMin = array.indexOf(min);
      let list = [...array];
      list.splice(indexOfMin, 1, min + componentsLength);
      return this.findIndexOfLastElement(list, componentsLength, listLength);
    } else {
      return array.indexOf(min);
    }
  }

  render() {
    const { components, index } = this.props;
    const len = components.length;

    if (index > this.temp) {
      this.list = this.incLastElement(this.list, len, this.list.length);
    } else if (index < this.temp) {
      this.list = this.decFirstElement(this.list, len, this.list.length);
    }

    const array = this.list.map(index => components[index]);
    this.temp = index;

    return (
      <Fragment>
        <div className="slider1__stage">
          <ul
            className="slider1__spinner"
            style={{transform: `rotateY(${-90*index}deg)`}}
            onTransitionEnd={this.onTransitionEnd}
          >
            {array.map((el, index) => (
              <li key={this.list[index]} className={`slider1__box slider1__box--${index}`}>
                {el}
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="slider1__btn slider1__btn--frwd">
          Forward
        </button>
        <button type="button" className="slider1__btn slider1__btn--back">
          Backward
        </button>
      </Fragment>
    );
  }
}

// const Slider = ({components, index}) => {
//   const len = components.length;
//   const array = [];
//   switch (index) {
//     case 0:
//       array.push(components[len - 1], components[0], components[1]);
//       break;
//     case (components.length - 1) :
//       array.push(components[len - 2], components[len - 1], components[0]);
//       break;
//     default:
//       array.push(components[index - 1], components[index], components[index + 1]);
//       break;
//   };
//   return(
//       <Fragment>
//         <div className='slider1__stage'>
//           <ul className='slider1__spinner'>
//             {array.map((el, index) => <li key={index} className={`slider1__box slider1__box--${index}`}>{el}</li>)}
//           </ul>
//         </div>
//         <button type='button' className='slider1__btn slider1__btn--frwd'>Forward</button>
//         <button type='button' className='slider1__btn slider1__btn--back'>Backward</button>
//       </Fragment>
//   );
// };

export default Slider;
