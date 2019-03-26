import React, { Component } from 'react';

class Archives extends Component {
    constructor() {
        super();
        this.state = {
            msg: "default click state",
        }

        console.log("I'm constructor");
    }

    setMsg = () => {
        console.log('set new state');
        this.setState({ msg: 'set new state' });
    }

    static getDerivedStateFromProps() {
        console.log("I'm getDerivedStateFromProps");
        return true;

    }

    shouldComponentUpdate() {
        console.log("I'm shouldComponentUpdate");
        return true;
    }

    render() {
        console.log("I'm render");

        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.setMsg}>Click Me!</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("I'm componentDidMount");
    }

    getSnapshotBeforeUpdate() {
        console.log("I'm getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("I'm componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("I'm destroying myself");
    }

}
export default Archives;