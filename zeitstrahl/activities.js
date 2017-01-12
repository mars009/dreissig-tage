export const activities = [
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