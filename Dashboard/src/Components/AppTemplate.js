import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router'

import React, {Component} from 'react';
import NavBar from "./NavBar"
import {bindActionCreators} from 'redux';
import {connect} from "react-redux"
import * as eventActions from "../actions/eventActions"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
function mapStateToProps(state) {
  return{events: state.events}
}
function mapDispatchToProps(dispatch){
  return{ actions: bindActionCreators(eventActions,dispatch) }
}
class AppTemplate extends Component {
  constructor(props){

    super(props);
      var self = this;
      var socket = io.connect("http://localhost:7777");
      socket.emit("start", "LET'S GO!");
      socket.on("UPDATE_EVENTS",function(){
        console.log("UPDATE EVENTS!");
        self.props.actions.fetchEvents();
      });

      socket.on("UPDATE_EVENT",function(id){

        self.props.actions.fetchEvent(id);
      });
  }
    render() {
      return(
        <MuiThemeProvider>
        <div >

          <NavBar/>
          <div className="container">

          {this.props.children}

        </div>

        </div>
        </MuiThemeProvider>
      )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppTemplate);
