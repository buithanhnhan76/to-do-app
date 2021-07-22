import './App.css';
import React, {Component} from 'react';
import Clock from './Components/Clock';
import Tasks from './Components/Tasks';
import Button from './Components/Button';
import axios from 'axios';

export const TasksContext = React.createContext();
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
  // update task
  handleUpdate = async (task) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index].completed = !tasks[index].completed;
    this.setState({tasks});
    // update server
    await axios.put("https://jsonplaceholder.typicode.com/todos" + "/" + task.id,task);
  }
  // delete task
  handleDelete = async (task) => {
    const tasks = this.state.tasks.filter(stateTask => stateTask.id !== task.id);
    this.setState({tasks});
    await axios.delete("https://jsonplaceholder.typicode.com/todos" + "/" + task.id);
  }
  render () {
    // pick tasks and willPower from state
    const {tasks,willPower} = this.state;
    
    return (
    <TasksContext.Provider value={{tasks: this.state.tasks, onUpdate: this.handleUpdate, onDelete: this.handleDelete}}>
    <div className="container mt-5">
        <Clock />
        <div className="row ">
          <div className="col-md-6">
            <Tasks tasks = {tasks} willPower={willPower}/>
          </div>
          {/* mt2 for responsive in small devices */}
          <div className="col-md-6 mt-2">
             <Button willPower={willPower} onClick={() => this.handleClick()}/>
          </div>
        </div>
    </div>
    </TasksContext.Provider>
    
  );
  }
};

export default App;
