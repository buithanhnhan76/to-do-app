import React, { Component } from 'react';

class Note extends Component {
    render() { 
        const {willPower} = this.props;
        return ( 
            (willPower)?    
            <div>
                <h1>This Is Your Tasks Today !</h1>
                <ul>
                    {this.props.tasks.map(task => 
                    <li key={task}>{task}</li>
                    )}
                </ul>
            </div>
            :
            <div>
                    {/* if willPower is false, then this h1 is printed */}
                    <h1>There're somethings you need to do !</h1>
            </div>
         );
    }
}
 
export default Note;