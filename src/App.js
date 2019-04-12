import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name='react' age={3}/>
      </div>
    );
  }
}

export default App;
