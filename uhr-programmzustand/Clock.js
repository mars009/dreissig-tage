import React, { Component } from 'react';

export default class Clock extends Component {

    constructor(props) {
      super(props);

      // Setting the initial state of the component
      const currentTime = this.getCurrentTime();

      this.state = {
        hours: currentTime.hours,
        minutes: currentTime.minutes,
        seconds: currentTime.seconds,
        ampm: currentTime.ampm
      }

      this.setTimer(); // start up the timeout
    }

    render() {

        const { hours, minutes, seconds, ampm } = this.state;

        return (
          <div className="clock">
            { hours == 0 ? 12 : (hours > 12) ? hours - 12 : hours }
            :
            { minutes > 9 ? minutes : `0${minutes}`}
            :
            { seconds > 9 ? seconds : `0${seconds}`}
            &nbsp;
            {ampm}
          </div>
        )
    }

    setTimer() {
      // Set a timer that will call updateClock bound to 'this'
      setTimeout(this.updateClock.bind(this), 1000);
    }

    updateClock() {

      const currentTime = this.getCurrentTime();

      // Second function passed to 'setState' is guaranteed to be called 'after' the state has been updated
      this.setState({
        hours: currentTime.hours,
        minutes: currentTime.minutes,
        seconds: currentTime.seconds,
        ampm: currentTime.ampm
      }, this.setTimer);
    }

    getCurrentTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      return {hours, minutes, seconds, ampm};
    }
}