import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    const text = 'Are you Awesome?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }

    return (
      <div className="my-div">
        { /* 요소 밖에서의 주석 사용법 */}
        <h1>리액트 안녕!</h1>
        <h1>{text}</h1>
        {
          condition ? 'true' : 'false'
        }
        <div style={style}></div>
        <div 
          // self-closed 태그에서만 작동하는 주석이다.
          // 마지막 /> 가 줄바꿈하여 새로운 줄에서 작성되어야 한다.
          /**  */
        />
        <MyComponent/>
      </div>
    );
  }
}

export default App;
