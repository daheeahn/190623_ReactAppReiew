import React, { Component} from 'react';

class TraineeDetail extends Component {
  render() {
    return (
        <div>
            <h3>{this.props.title}</h3>
            {this.props.desc}
        </div>  
    );
  }
}

export default TraineeDetail;