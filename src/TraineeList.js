import React, { Component} from 'react';

class TraineeList extends Component {
  render() {
    var list = [];
    var data = this.props.data;
    var i = 0;

    while (i < data.length) {
        list.push(
            <li key={data[i].id}>
                <a href={"/content/" + data[i].id}
                    data-id={data[i].id}
                    onClick={function(e) {
                        e.preventDefault();
                        // alert(e.target.dataset.name); // 이게 맞음!
                        // alert(data[i].desc); // 그냥 이렇게 하면 안되고 data-name 만들고 e.target으로 접근하기
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>
                    {data[i].name}
                </a>
            </li>
        );
        i = i + 1;
    }

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>  
    );

  }
}

export default TraineeList;