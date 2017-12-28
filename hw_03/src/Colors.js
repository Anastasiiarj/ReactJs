import React, { Component } from 'react';

class Colors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isColor: 'black'};
        this.redColor = this.redColor.bind(this);
        this.blueColor = this.blueColor.bind(this);
        this.reset = this.reset.bind(this);
    }
    redColor() {
        this.setState({isColor: this.state.isColor = 'red'})
    }
    blueColor() {
        this.setState({isColor: this.state.isColor = 'blue'})
    }
    reset() {
        this.setState({isColor: this.state.isColor = 'black'})
    }
    render() {
        const style = {color: this.state.isColor}
        return (
            <div>
                <p style={style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button onClick={this.redColor}>Red</button>
                <button onClick={this.blueColor}>Blue</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Colors;