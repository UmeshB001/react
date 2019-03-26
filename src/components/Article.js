import React, { Component } from 'react';

class Article extends Component {
    render() {
        return (
            <div className="col-md-4">
                <input value={this.props.title} onChange={e => {
                    this.props.changeTitle(e.target.value)
                }} />
                <h4>{this.props.title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>

            </div>
        );
    };
}
export default Article;