// instead of adding the React.Component dynamic from react 

// You could omit component and then add React.Component a few lines down.
import React, { Component } from 'react';

// Otherwise you'd have to use class Clock extends.Compenent {}
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
//   this is a method in the react library.  It should run as soon as it is on the screen.  
// This is a lifecycle hook.  a lifehook.  THis all comes together. But he calls the method and variable.
// a life cycle hook is a timed update to the state and then renders it.
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

//   Runs code on something when it knows it will leave the screen.
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    // setState resets the state
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;