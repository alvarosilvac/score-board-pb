import React, { Component } from 'react';

export default class SplitDeckComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      teams:[],
    }
  }

  render(){
    return(
      <div>Split Deck Component</div>
    );
  }
}