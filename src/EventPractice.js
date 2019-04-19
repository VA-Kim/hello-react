import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: '',
        username: ''
    }

    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // 각 이벤트의 속성에, 각각의 입력값을 매칭시켜준다. 
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            message: '',
            username: ''
        });
    }

    hanbleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>Practice Event</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Put username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="Put anything"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.hanbleKeyPress}
                />                
                <button onClick={this.handleClick}>Check the state</button>
            </div>
        );
    }
}

export default EventPractice;