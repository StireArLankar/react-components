import React, { Component } from 'react';

class Ring extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.time = Date.now();
  }

  onKeyDown = (evt) => {
    const now = Date.now();
    if (now - this.time < 100) return;
    if (evt.keyCode === 38 || evt.keyCode === 39) {
      const { onRingClick, progress } = this.props;
      const result = progress <= 95 ? +progress + 5 : progress;
      onRingClick(result);
    }
    if (evt.keyCode === 37 || evt.keyCode === 40) {
      const { onRingClick, progress } = this.props;
      const result = progress >= 5 ? +progress - 5 : progress;
      onRingClick(result);
    }
    this.time = now;
  }

  changeValue = (evt) => {
    evt.preventDefault();
    
    const {
      offsetTop,
      offsetLeft,
      offsetWidth,
      offsetHeight
    } = this.myRef.current;
    const centerY = offsetTop + offsetHeight / 2;
    const centerX = offsetLeft + offsetWidth / 2;
    const action = this.props.onRingClick;

    calculate(evt);
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseUp(evt) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      calculate(evt);
    }

    function onMouseMove(evt) {
      const {clientX, clientY} = evt;
      const x = clientX - centerX;
      const y = -clientY + centerY;
      const fi = (Math.atan2(x, y) * 50) / Math.PI;
      const result = Math.ceil(fi < 0 ? fi + 100 : fi);
      action(result);
    }

    function calculate(evt) {
      const {clientX, clientY} = evt;
      const x = clientX - centerX;
      const y = -clientY + centerY;
      const fi = (Math.atan2(x, y) * 50) / Math.PI;
      const result = Math.ceil(fi < 0 ? fi + 100 : fi);
      action(result);
    }
  };

  stopProp = evt => {
    evt.stopPropagation();
    const result = this.props.progress > 50 ? 0 : 100;
    this.props.onRingClick(result);
  };

  render() {
    const { radius, stroke, progress, children } = this.props;
    const container_style = {
      width: 2 * radius * 0.99,
      height: 2 * radius * 0.99
    };
    const inner_style = {
      width: 2 * (radius - stroke) * 1.05,
      height: 2 * (radius - stroke) * 1.05
    };

    return (
      <div
        className="circle-bar__container"
        onMouseDown={this.changeValue}
        onKeyDown={this.onKeyDown}
        ref={this.myRef}
        style={container_style}
        tabIndex={0}
      >
        <ProgressRing radius={radius} stroke={stroke} progress={progress} />
        <div
          className="circle-bar__inner"
          style={inner_style}
          onMouseDown={this.stopProp}
        >
          {children}
        </div>
      </div>
    );
  }
}

class ProgressRing extends Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke / 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;
    const strokeDashoffset =
      this.circumference - (progress / 100) * this.circumference;

    return (
      <svg className="circle-bar__svg" height={radius * 2} width={radius * 2}>
        <linearGradient id="gradient1">
          <stop id="stop1" offset="0%" stopColor="black" stopOpacity="1" />
          <stop id="stop2" offset="100%" stopColor="green" />
        </linearGradient>
        <linearGradient
          id="gradient2"
          x1="0"
          x2="0"
          y1="0"
          y2="1"
          xlinkHref="#gradient1"
        />
        <circle
          stroke="url(#gradient1)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{ strokeDashoffset }}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  }
}

export default Ring;
