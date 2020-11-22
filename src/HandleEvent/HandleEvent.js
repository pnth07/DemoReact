import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess=()=>{
        alert('hello');
    }
    render() {
        return (
            <div className="container">
                <h3>Handle Event</h3>
                <button onClick={this.showMess}>Click me</button>
            </div>
        )
    }
}
