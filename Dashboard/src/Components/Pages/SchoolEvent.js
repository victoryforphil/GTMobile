
import { Router, Route, Link, browserHistory } from 'react-router'
import React, { Component } from 'react';
class SchoolEvent extends Component{

  render(){
    return(
      <h1>School Event! {this.props.params.eventId}</h1>
    )
  }
}

export default SchoolEvent;
