import './App.css';
import React, {Component} from 'react';
import Clock from './Components/Clock';
import Tasks from './Components/Tasks';
import Button from './Components/Button';
import axios from 'axios';

class App extends Component {
  state = {
    // your tasks
    tasks: [],
    // willPower: you will do it ?, default is false
    willPower: false,
  };
  async componentDidMount(){
    // api tasks is the task received from json
    const apiTasks = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.setState({tasks: apiTasks.data});
  }
  // when click, set willPower != willPower 
  handleClick(){
    this.setState({willPower: !this.state.willPower});
  }

  render () {
    // pick tasks and willPower from state
    const {tasks,willPower} = this.state;
    return (
    <div className="container-fluid mt-3">
        <Clock />
        <div className="row container-fluid">
          <div className="col-10">
            <Tasks tasks = {tasks} willPower={willPower}/>
          </div>
          <div className="col-2">
            <Button willPower={willPower} onClick={() => this.handleClick()}/>
          </div>
        </div>
        
        
    </div>
  );
  }
};

export default App;
