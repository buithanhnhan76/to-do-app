import './App.css';
import React, {Component} from 'react';
import Clock from './Components/Clock';
import Note from './Components/Note';
import Button from './Components/Button';

class App extends Component {
  state = {
    // your tasks
    tasks: [
    " Reactjs: Axios",
    " Improve: Html, Css, JavaScript, Bootstrap4"
    ],
    // willPower: you will do it ?, default is false
    willPower: false,
  };

  // when click, set willPower != willPower 
  handleClick(){
    this.setState({willPower: !this.state.willPower});
  }

  render () {
    // pick tasks and willPower from state
    const {tasks,willPower} = this.state;
    return (
    <div className="container mt-3">
        <Clock />
        <div className="row">
          <div className="col-8">
            <Note tasks = {tasks} willPower={willPower}/>
          </div>
          <div className="col-4">
            <Button willPower={willPower} onClick={() => this.handleClick()}/>
          </div>
        </div>
        
        
    </div>
  );
  }
};

export default App;
