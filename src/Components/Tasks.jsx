import React, { Component } from 'react';
// pagination
import ReactPaginate from 'react-paginate';
// paginate data
import { paginate } from '../utils/paginate';
// import tasks photo
import tasksPhoto from '../images/tasks.jpg';
import {Link} from 'react-router-dom';
// router
import {Route} from 'react-router-dom';
import TaskDetails from './TaskDetails';
 
class Tasks extends Component {
    state = {
        // current page && pageSize
        currentPage: 0,
        pageSize: 5,
    }
    handlePageChange = (data) => {
        // pick selected from data: 1,2,3 
        const selectedPage = data.selected;
        this.setState({currentPage: selectedPage});
    }
    render() { 
        const {willPower,tasks} = this.props;
        const {pageSize, currentPage} = this.state;

        // paginate data
        const paginateTasks = paginate(tasks,currentPage,pageSize);
        
        // pageCount for pagination
        const pageCount = Math.ceil(tasks.length / pageSize);

        return ( 
            (willPower)?    
            <div>
                <h1>Your tasks !</h1>
                    {paginateTasks.map(task => 
                    // margin bottom for space with pagination
                    <div key={task.id} className="row mb-3">
                        {/* text truncate to wrap text with ... */}
                        <div className="col-8 text-truncate">
                            {task.title}
                        </div>
                        <div className="col-4">
                            <Link to={`/taskdetails/${task.id}`}><button className="btn btn-success">Details</button></Link> 
                        </div>
                        
                    </div>
                    )}
                <ReactPaginate 
                pageCount={pageCount}
                onPageChange={this.handlePageChange}
                marginPagesDisplayed={2}
                containerClassName="pagination"
                pageClassName="page-item"
                nextClassName="page-item"
                previousClassName="page-item"
                breakClassName="page-item"
                activeClassName="page-item active"
                pageLinkClassName="page-link"
                nextLinkClassName="page-link"
                previousLinkClassName="page-link"
                breakLinkClassName="page-link"
                activeLinkClassName="page-link"
                />
                <Route path="/taskdetails/:id" render={(props) => <TaskDetails {...props}></TaskDetails>}></Route>
            </div>
            :
            <div>
                    {/* if willPower is false, then this h1 is printed */}
                    <h1>Tasks for you !</h1>
                    <img className="img img-thumbnail img-deco" src={tasksPhoto}></img>
            </div>
         );
    }
}
 
export default Tasks;