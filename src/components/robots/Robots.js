import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SerachBox';
import Scroll from './Scroll';
import 'tachyons';

class Robots extends Component {
    constructor() {
        super()
        console.log("I'm a Constructor");
        this.state = {
            'robots': [],
            'searchfield': ''
        }
    }

    //return the updated state data, or null if no update is needed
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("I'm getDerivedStateFromProps");
        return true;
    }

    shouldComponentUpdate() {
        console.log("I'm shouldComponentUpdate");
        return true;
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        console.log("I'm Render");
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //loading 
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>Robo Factory</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>

                </div>
            );
    }

    componentDidMount() {
        console.log("I'm componentDidMount");

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ 'robots': users }));
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

export default Robots;