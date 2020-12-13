import React, { Component } from 'react'

export default class ChildComponentLiveCircle extends Component {
    timeout = setInterval(() => {
        console.log(1);
    }, 1000)
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('child constructor');
    }

    static getDerivedStateFromProps() {
        console.log('child getDerivedStateFromProps');
        return null;
    }
    shouldComponentUpdate() {
        console.log('child shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('child render');
        return (
            <div>
                child component
            </div>
        )
    }

    componentDidUpdate() {
        console.log('child componentDidUpdate');
    }

    componentDidMount() {
        console.log('child componentdidmount');
    }

    componentWillUnmount() {
        clearInterval(this.timeout)
        console.log('child componentWillUnmount');
    }
}
