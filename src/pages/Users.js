import React, { Component } from 'react';

// export default function Users() {
//     const [robots, setRobots] = useState([]);
//     const changeTitle = changedName => {
//         setName(changedName);
//     }
//     return (
//         <div>
//             
//         </div>
//     );
// }

class Users extends Component {

    constructor() {
        super()
        this.state = {
            'robots': []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ 'robots': users }));
    }


    render() {
        console.log(this.state.robots);
        return (
            <div className="container-fluid">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.robots.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{this.state.robots[i].id}</td>
                                    <td>{this.state.robots[i].name}</td>
                                    <td>{this.state.robots[i].username}</td>
                                    <td>{this.state.robots[i].email}</td>
                                    <td>{this.state.robots[i].phone}</td>
                                    <td>{this.state.robots[i].website}</td>
                                </tr>
                            );

                        })
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}
export default Users;