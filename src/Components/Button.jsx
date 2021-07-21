import React, { Component } from 'react';

class Button extends Component {
    render() {
        // pick willPower from app.js
        const {willPower} = this.props;
        return ( 
            // btn class = success when not click and in danger if user want to finish
            <button onClick={this.props.onClick} className={(willPower)?"btn btn-danger":"btn btn-success"}
            >
            {/* label is Get It when user not click and Finish after user click */}
            { willPower ? "Finish" : "Get it"}
            </button>
         );
    }
}
 
export default Button;