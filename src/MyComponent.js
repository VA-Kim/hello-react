import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: 'default name'
    }

    static propsTypes = {
        name: PropTypes.string, // name type을 문자열로 설정.
        age: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <div>
                <p>Hello, my name is {this.props.name}!</p>
                <p>I'm {this.props.age}!</p>
                <p>The number is {this.state.number}!</p>
                <button onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    } 
                }>Increase Number</button>
            </div>
        );
    }
}

export default MyComponent;