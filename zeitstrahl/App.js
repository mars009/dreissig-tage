import React from 'react';
import { render } from 'react-dom'
import Header from './Header.js';
import Content from './Content.js';

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Played Games",
    user: {
      id: 1, name: 'Mars',
      avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
    },
    comments: [
      {from: '7th', text: 'Me too!'}
    ]
  },
  {
    timestamp: new Date().getTime(),
    text: "Mined dogecoins",
    user: {
      id: 1, name: 'Andy',
      avatar: 'http://www.croop.cl/UI/twitter/images/doug.jpg'
    },
    comments: [
      {from: 'Doge', text: 'Such mine, much wow!'}
    ]
  }
]

console.log(activities);

class App extends React.Component {
  render() {
    
    return (
      <div className="notificationFrame">
        <div className="panel">
            <Header title="Timeline"/>
            <Content activities={activities}/>
        </div>
      </div>
    )
  }
}

const app = document.getElementById("app");
render(<App/>, app);