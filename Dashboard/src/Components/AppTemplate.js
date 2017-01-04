import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router'

import React, {Component} from 'react';
import NavBar from "./NavBar"

import {connect} from "react-redux"
import {fetchEvents} from "../actions/eventActions"

function mapStateToProps(state) {
  return{events: state.events}
}
function mapDispatchToProps(dispatch){
  return{ fetchEvents: function(){dispatch(fetchEvents())} }
}

class AppTemplate extends Component {
  constructor(props){

    super(props);
      var self = this;
      var socket = io.connect("http://localhost:7777");
      socket.emit("start", "LET'S GO!");
      socket.on("UPDATE_EVENTS",function(){
        console.log("UPDATE EVENTS!");
        self.props.fetchEvents();
      });
  }
    render() {
      return(
        <div >
          <NavBar/>
          <div className="container">
          {this.props.children}
        </div>
        </div>
      )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppTemplate);
