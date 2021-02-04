import React, { Component } from 'react';

class Note extends Component {
    render() { 
        let {doIt} = this.props;
        return ( 
            (doIt) ?    
            <div>
                <h1>This Is Your Tasks Today !</h1>
                <ul>
                    {this.props.tasks.map(task => 
                    <li key={task}>{task}</li>
                    )}
                </ul>
            </div>  :
            <div>
                    <h1>There're somethings you need to do !</h1>
            </div>
         );
    }
}
 
export default Note;