import React from 'react';

// Don't forget the "default"
export default class ActivityItem extends React.Component {

  render(){

    const { activity } = this.props;

    return (
      <div className="item">
        <div className="avatar">
          <img src={activity.user.avatar} />
          {activity.user.name}
        </div>

        <span className="time">
          {activity.timestamp}
        </span>
        <p>{activity.text}}</p>
        <div className="commentCount">{activity.comments.length}</div>
      </div>
    )
  }
    
}