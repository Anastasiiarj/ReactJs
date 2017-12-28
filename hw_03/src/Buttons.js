import React, { Component } from 'react';

class Appl extends Component{
    constructor(props){
        super(props);
        this.state = {number: this.props.init};
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }
    decrement() {
        this.setState({number: --this.state.number})
    }
    increment() {
        this.setState({number: ++this.state.number})
    }
    render() {
        return (
            <div>
                <button onClick={this.decrement}> - </button>
                <span>{this.state.number}</span>
                <button onClick={this.increment}> + </button>
            </div>
        )
    }

}

export default Appl;