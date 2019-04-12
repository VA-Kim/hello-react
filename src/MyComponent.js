import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'default name',
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired    // 필수적으로 존재해야하며, 숫자입니다.
    }
    // constructor(props) {   //props 넣지않아도 작동한다. 에러도 없다. 직관적으로 이해하기위한 약속인가?
    //     super(props);
    //     this.state = {  // 초기값 설정.
    //         number: 0
    //     }
    // }
    state = {
        number: 0
    }
    render() {
        return (
            <div>
                <p>Hello, my name is {this.props.name}.</p>
                <p>I'm {this.props.age}.</p>
                <p>Number: {this.state.number}.</p>  { /** 랜더링 */ }
                <button onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        });
                    }
                }>PLUS</button>
            </div>
        );
    }
}

export default MyComponent;