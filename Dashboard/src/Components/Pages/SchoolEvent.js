
import { Router, Route, Link, browserHistory } from 'react-router'
import React, { Component } from 'react';
import * as firebase from 'firebase';
class SchoolEvent extends Component{
  constructor(props){
    super(props);
    this.state = {
      eventData: {}
    }
  }
  componentDidMount(){
    var cursor = firebase.database().ref("Events/"+this.props.params.eventId);
    if(cursor != null){
      this.setState({eventData: cursor})
    }else{
      alert("Error Not Found!")
    }

  }


  render(){
    return(

      <div>

        <ProjectActions event={this.state.eventData} eventId = {this.props.params.eventId}/>
      </div>
    )
  }
}

class ProjectActions extends Component{

  deleteEvent = () => {
    this.props.event.remove();
  }
  render(){
    return(<div className="card ">
      <div className="card-content">
        <span className="card-title">Project Actions</span>
        <p> <b>Project ID: </b>{this.props.eventId}</p>
      </div>
      <div className="card-action">
        <a href="#" onClick={this.deleteEvent} className="red-text ">
          <b>Delete Event</b>
        </a>
      </div>
    </div>)
  }
}

export default SchoolEvent;
