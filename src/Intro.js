import React, { Component} from 'react';

class Intro extends Component {
  render() {
    return (
        <div>
            <h1>
                <a href="/" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>
                    {this.props.title}
                </a>
            </h1>
            
            {this.props.desc}
            
        </div>
    );
  }
}

export default Intro;