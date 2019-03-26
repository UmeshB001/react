import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {

    constructor() {
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        return (
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="">
                                <Link to={'/'}> Featured </Link>
                            </li>
                            <li className="">
                                <Link to={'/archives'}>Archives</Link>
                            </li>
                            <li className="">
                                <Link to={'/settings'}>Settings</Link>
                            </li>
                            <li className="">
                                <Link to={'/robots'}>Robots</Link>
                            </li>
                            <li className="">
                                <Link to={'/users'}>Users</Link>
                            </li>
                            <li className="">
                                <Link to={'/redux'}>Redux</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
