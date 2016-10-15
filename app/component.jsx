import './Component.css';
import React from 'react';

var style = {
  backgroundColor: '#EEE'
};

export default class Hello extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1 className="first">Hello world</h1>
      </div>
    )
  }
}