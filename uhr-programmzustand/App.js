import React, { Component } from 'react';
import { render } from 'react-dom'
import Clock from './Clock.js';

export default class App extends Component {

  render() {
    return (
      <div><Clock/></div>
    )
  }
}

const app = document.getElementById('app');
render(<App/>, app);

