import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(){
        super();
        this.state = {
            count:0,
        }
    }
handleIncrease = () => {
    this.setState({count:this.state.count+1});
};

handleDecrease = () => {
    this.setState({count:this.state.count-1});
}

    render() {
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleIncrease}>Add One</button>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleDecrease}>Subtract</button>
            </>
           
        );
    }
}

export default ClassCounter;
