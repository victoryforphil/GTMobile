
import { Router, Route, Link, browserHistory } from 'react-router'
import React, { Component } from 'react';
import * as firebase from 'firebase';
class SchoolEvents extends Component{




  render(){
    return(
      <div>
        <EventList/>
      </div>
    )
  }
}

class EventList extends Component{

  constructor(){
    super();
    this.state = {
      events : []
    }
  }

  componentDidMount(){

    const root = firebase.database().ref("Events");

    root.on('value', snap => {
      var tempList =[];

      snap.forEach(data => {
        tempList.push(data.val())
      })

      this.setState({events: tempList});
    });
  }

  renderList(){
    return(<ul>{this.state.events.map(val=>{
      return (<li key={val.name}>{val.name}</li>)
    })}</ul>)
  }

  render(){
    return(
      <div>
        {this.renderList()}
      </div>
    )
  }
}

export default SchoolEvents;
