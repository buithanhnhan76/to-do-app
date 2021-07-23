import React from 'react';
// useContext
import { useContext } from 'react';
// context from app
import { TasksContext } from '../App';

const TaskDetails = (props) => {
    // id is the id of task
    const id = props.match.params.id;
    // context
    const taskscontext = useContext(TasksContext);
    // task is an array
    const task = taskscontext.tasks.filter(task => task.id === parseInt(id));
    return (
        <div className="container-fluid">
            {task[0]?
            <React.Fragment>
            <p>ID: {task[0].id}</p>
            <p>TITLE: {task[0].title}</p>
            {/* if complteted is true || */}
            <p>COMPLETE: {(task[0].completed)?<span className="badge badge-success">Complete</span>:<span className="badge badge-danger">Not Yet</span> }</p>
            <button className="btn btn-warning d-block" onClick={() => taskscontext.onUpdate(task[0])}>Update</button>
            {/* my to create space between buttons */}
            {/* when click on delete, close taskdetails and delete task   */}
            <button className="btn btn-danger d-block my-3" onClick={() => {taskscontext.onDelete(task[0])}}>Delete</button>
            {/* some bottom margin */}
            </React.Fragment>
            :
            <span className="badge badge-warning mb-3">Delete Successful</span>
            }
            {/* push("/"") => just close the taskdetails, cause I not use router on other component  */}
            <button className="btn btn-success mb-3 d-block" onClick={() => props.history.push("/")}>Close</button>
        </div>
    );
}
 
export default TaskDetails;