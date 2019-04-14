import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';

class App extends Component {
  render() {
    return (
      <div>
        {/* <MyComponent name='react' age={3}/> */}
        <EventPractice/>
      </div>
    );
  }
}

export default App;
