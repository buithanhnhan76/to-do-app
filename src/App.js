import './App.css';
import React, {Component} from 'react';
import Clock from './Components/Clock';
import Note from './Components/Note';
import Button from './Components/Button';

class App extends Component {
  state = {
    learn: [
    " Reactjs: Lists and Keys",
    " Html: need improved",
    " Css: need improve",
    " javascript: need improve"
    ],
    willPower:false,
  };

  handleClick(){
    this.setState({willPower: !this.state.willPower});
  }

  render () {
    let {learn,willPower} = this.state;
    return (
    <div>
        <Clock />
        <Note tasks = {learn} doIt={willPower}/>
        <Button doIt={willPower} onClickChange={() => this.handleClick()}/>
    </div>
  );
  }
};

export default App;
