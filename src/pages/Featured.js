import React, { Component } from 'react';
import Article from '../components/Article';

// export default function Featured() {
//     const [name, setName] = useState("Umesh");
//     const changeTitle = changedName => {
//         setName(changedName);
//     }
//     return (
//         <div>
//             <Article title={name} changeTitle={changeTitle} />
//         </div>
//     );
// }

class Featured extends Component {
    constructor() {
        super()
        this.state = {
            name: "Umesh",
        }
    }

    render() {
        const changeTitle = name => {
            this.setState({ name });
        }
        return (
            <div>
                <Article title={this.state.name} changeTitle={changeTitle} />
            </div>
        );
    }
}
export default Featured;