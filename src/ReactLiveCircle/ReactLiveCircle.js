import React, { Component } from 'react'
import ChildComponentLiveCircle from './ChildComponentLiveCircle';

export default class ReactLiveCircle extends Component {
    //Life circle là các hàm có sẵn của react
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps');
        return null;
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('render');
        return (

            <div className='container'>
                {this.state.number}
                <button className='btn btn-success' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                {this.state.number < 2 ? <ChildComponentLiveCircle /> : ''}
            </div>
        )
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentDidMount() {
        console.log('componentdidmount');
    }
}
