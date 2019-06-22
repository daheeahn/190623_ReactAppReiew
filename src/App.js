import React, { Component} from 'react';
import Intro from "./Intro";
import TraineeList from "./TraineeList";
import TraineeDetail from "./TraineeDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selectedId: 0,
      intro: {title: '국민 프로듀서님들', desc: '안녕하세요!'},
      welcome: {title: '프로듀스 X 101 Welcome', desc: '연습생들을 소개합니다! Welcome!'},
      contents: [
        {id: 1, name: '함원진', desc: '박수의 센터! 함원진을 뽑아주세요'},
        {id: 2, name: '이한결', desc: 'Fitness의 센터! 이한결을 뽑아주세요'},
        {id: 3, name: '김요한', desc: '태권소년 우주뿌셔 김요한을 뽑아주세요'},
        {id: 4, name: '한승우', desc: '승우오빠 무조건 데뷔해... 한승우를 뽑아주세요'}
      ]
    }
  }

  render() {
    var _title = null;
    var _desc = null;
    
    if (this.state.mode === 'read') {
      var i = 0;
      var data = this.state.contents;
      while (i < data.length) {
        if (data[i].id === this.state.selectedId) {
          _title = data[i].name;
          _desc = data[i].desc;
          break;
        }
        i = i + 1;
      }
    }
    else if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;  
    }


    return (
      <div className="App">
        <Intro 
          title={this.state.intro.title} 
          desc={this.state.intro.desc}
          onChangePage={function() {
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>

        </Intro>

        <TraineeList
          data={this.state.contents}
          onChangePage={function(id) {
            this.setState({
              selectedId: Number(id),
              mode: 'read'
            })
          }.bind(this)}>

        </TraineeList>
      
        <TraineeDetail
          title={_title}
          desc={_desc}>

        </TraineeDetail>
      
      </div>
    );
  }
}

export default App;