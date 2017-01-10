import React from 'react';
import { render } from 'react-dom'
import Header from './Header.js';
import Content from './Content.js';

class App extends React.Component {
  render() {
    return (
      <div className="notificationFrame">
        <div className="panel">
            <Header/>
            <Content/>
        </div>
      </div>
    )
  }
}

const app = document.getElementById("app");
render(<App/>, app);