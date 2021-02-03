import React, { Component } from 'react';



class Clock extends Component{
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    };
  
    tick(){
      this.setState({date: new Date()});
    };
  
    render(){
      return (
        <div>
          <h1>Hello, World!</h1>
          <h2>It is {this.state.date.toLocaleDateString()}. </h2>
        </div>
      )
    };
  };

export default Clock;