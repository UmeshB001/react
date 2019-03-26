import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

class Settings extends Component{

    constructor(props){
        super(props);
        console.log(this.props);
        
    }
    render() {
        return(
            <div>
                <h1>Settings</h1>
                <Link to={this.props.match.url + "/topics"}>Topics</Link>
                <Route path={this.props.match.url + "/topics"} component = {Topics}/>
            </div>
        );
    }
}

function Topics(){
    return(
        <div>
            <h1>Topic_1</h1>
        </div>
    );
}
export default Settings;

