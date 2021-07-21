import React, { Component } from 'react';



class Clock extends Component{
    constructor(props){
      super(props);
      // initial date with Date type js (Wed Jul 21 2021 16:34:45 GMT+0700 (Indochina Time))
      this.state = {date: new Date()};
    };
  
    componentDidMount(){
      // call tick every 1000 miliseconds
      setInterval(() => this.tick(),1000);
    };

    // set date with a new date
    tick(){
      this.setState({date: new Date()});
    };
  
    render(){
      return (
        <div>
          <h1>Hello Guy!</h1>
          {/* toLocaleTimeString returns time like 04:03:01 pm */}
          <h2>It is {this.state.date.toLocaleTimeString()}. </h2>
        </div>
      )
    };
  };

export default Clock;