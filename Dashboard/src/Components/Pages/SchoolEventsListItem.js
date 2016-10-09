
import { Router, Route, Link, browserHistory } from 'react-router'
import React, { Component } from 'react';
class SchoolEventsListItem extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <tr key={this.props.event.name}>
        <td>{this.props.event.name}</td>
        <td>{this.props.event.date}</td>
        <td>{this.props.event.desc}</td>
        <td><Link to={`/event/${this.props.event.id}`}>Open</Link></td>
      </tr>
    )
  }
}

export default SchoolEventsListItem;
