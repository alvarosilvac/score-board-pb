import React, { Component } from 'react';

export default class SingleGameComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      teams:[],
    };
  }

  render(){
    return(
      <div>Single Game Component</div>
    )
  }
}