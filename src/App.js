import './App.css';
import React, {Component} from 'react';
import Clock from './Components/Clock';
import Tasks from './Components/Tasks';
import Button from './Components/Button';
import axios from 'axios';
import ListGroup from './Components/common/ListGroup';
// paginate data
import { paginate } from './utils/paginate';

export const TasksContext = React.createContext();
class App extends Component {
  state = {
    // your tasks
    tasks: [],
    // willPower: you will do it ?, default is false
    willPower: false,
    // listgroup
    states: [
      {_id: "", name: "All"},
      {_id:"1", name: "Complete",completed: true},
      {_id:"2", name: "Not Complete", completed: false}
    ],
    selectedItem: {_id: "", name: "All"},
    // tasks
    currentPage: 0,
    pageSize: 5,
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
  // select item on listgroup handle
  handleItemSelect = (item) => {
    this.setState({selectedItem: item, currentPage: 0});
  }
  // select page on Pagination
  handlePageChange = (data) => {
  // pick selected from data: 1,2,3 
    const selectedPage = data.selected;
    this.setState({currentPage: selectedPage});
}
  render () {
    // pick tasks and willPower from state
    const {tasks,willPower,selectedItem, currentPage, pageSize} = this.state;
    // filter tasks
    const selectedTasks = (selectedItem._id)?tasks.filter(task => task.completed === selectedItem.completed):tasks;
     // paginate data
    const paginateTasks = paginate(selectedTasks,currentPage,pageSize);    
     // pageCount for pagination
    const pageCount = Math.ceil(selectedTasks.length / pageSize);
    return (
    <TasksContext.Provider value={{tasks: tasks, onUpdate: this.handleUpdate,
    onDelete: this.handleDelete}}>
    <div className="container mt-5">
        <Clock />
        <div className="row ">
          <div className="col-md-5">
            <Tasks willPower={willPower} paginateTasks={paginateTasks} pageCount={pageCount}
            onPageChange={this.handlePageChange} currentPage={currentPage}/>
          </div>
          {/* mt2 for responsive in small devices */}
          <div className="col-md-7 mt-2">
            <div className="container-fluid mb-2"><Button willPower={willPower}
            onClick={() => this.handleClick()}/></div>
            {/* conditional render for list group */}
            {willPower&&<div className="container-fluid"><ListGroup items={this.state.states}
            selectedItem={this.state.selectedItem} onItemSelect={this.handleItemSelect}></ListGroup></div>}
          </div>
        </div>
    </div>
    </TasksContext.Provider>
    
  );
  }
};

export default App;
