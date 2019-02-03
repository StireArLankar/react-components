import React, { Component } from 'react';
import array from './countries';
import './style.scss';

const prefix = 'autocomplete__';

class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    // this.items = this.props.items;
    this.items = array;
    this.state = {
      input: '',
      suggestion: []
    };
  }

  componentWillMount() {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', 'rgb(240, 208, 233)');
  }

  onTextInput = evt => {
    const value = evt.target.value;
    this.setState({ input: value });
    if (value.length > 0) {
      const reg = new RegExp(`^${value}`, `i`);
      const reg2 = new RegExp(`^${value}$`, `i`);
      const it = this.items.filter(v => reg.test(v)).filter(v => !reg2.test(v));
      this.setState({ suggestion: it });
    } else {
      this.setState({ suggestion: [] });
    }
  };

  onItemClick = value => {
    this.setState(() => ({
      input: value,
      suggestion: []
    }));
  };

  renderList = () => {
    const suggestion = this.state.suggestion;
    if (suggestion.length === 0) {
      return null;
    }

    return (
      <ul className={`${prefix}list`}>
        {suggestion.map(item => (
          <li className={`${prefix}item`} onClick={() => this.onItemClick(item)}>{item}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className={`${prefix}wrapper`}>
        <input
          type="text"
          className={`${prefix}input`}
          onChange={this.onTextInput}
          value={this.state.input}
        />
        {this.renderList()}
      </div>
    );
  }
}

export default AutoCompleteText;
