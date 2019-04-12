import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <MyComponent name='New name' age={3}/>  // 문자열 외의 값은 {}로 감싸지 않으면 컴파일 에러가 발생한다. 
    );
  }
}

export default App;
