import React, { Component } from 'react';

class Button extends Component {

    getClass(doIt){
        if(doIt)
            return "btn btn-success";
        return "btn btn-danger";
    };
    

    render() {
        let {doIt} = this.props;
        return ( 

            <button onClick={this.props.onClickChange} className={this.getClass(doIt)}
            type="button">{ doIt === false ? "Do It" : " GIVE 100 % "}</button>
         );
    }
}
 
export default Button;