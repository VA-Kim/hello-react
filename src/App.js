import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <div>
        <ValidationSample/>
        {/* <MyComponent name='react' age={3}/> */}
        {/* <EventPractice/> */}

      </div>
    );
  }
}

export default App;
