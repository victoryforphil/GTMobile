
import { Router, Route, Link, browserHistory } from 'react-router'
import React, { Component } from 'react';
import * as firebase from 'firebase';
import SchoolEventsListItem from "./SchoolEventsListItem"
class SchoolEvents extends Component{
  render(){
    return(
      <div>
        <NewEvent/>
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

    const db = firebase.database().ref("Events");

    db.on('value', snap => {
      var tempList =[];

      snap.forEach(data => {
        tempList.push(data.val())
      })

      this.setState({events: tempList});
    });
  }

  renderList(){
    return(
      <table className="table table-hover table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Desc</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {this.state.events.map(val=>{
            return (<SchoolEventsListItem event={val}/>)
          })}
        </tbody>
      </table>
    )
  }

  render(){
    return(
      <div>
        {this.renderList()}
      </div>
    )
  }
}

class NewEvent extends Component{

  constructor(){
    super();
    this.state ={
      name: "",
      desc: "",
      group: "",
      date: "12/31/16"
    }
  }
  createEvent = () =>{
    var id = "event-"+ randomInt(0,99999999);
    var obj = this.state;
    obj.id = id;
    firebase.database().ref('Events/'+id).set(obj);
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleDescChange = (event) => {
    this.setState({desc: event.target.value});
  }

  handleGroupChange = (event) => {
    this.setState({group: event.target.value});
  }

  handleDateChange = (event) => {
    this.setState({date: event.target.value});
  }


  render(){
    return(
      <div className="SignIn row">
        <div className="panel panel-default col-23">
          <div className="panel-heading">New Event</div>
          <div className="panel-body">
            <form>
                <div className="form-group">
                  <label htmlFor="eventName">
                    Event Name
                  </label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    className="form-control"
                    id="eventName"
                    placeholder="Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="eventName">
                    Event Desc
                  </label>
                  <input
                    type="text"
                    value={this.state.desc}
                    onChange={this.handleDescChange}
                    className="form-control"
                    id="eventName"
                    placeholder="Example Desc" />
                </div>

                <div className="form-group">
                  <label htmlFor="eventGroup">
                    Event Group
                  </label>
                  <input
                    type="text"
                    value={this.state.group}
                    onChange={this.handleGroupChange}
                    className="form-control"
                    id="eventGroup"
                    placeholder="Sports/BasketBall/JV" />
                </div>

                <div className="form-group">
                  <label htmlFor="eventName">
                    Event Date
                  </label>
                  <input
                    type="text"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                    className="form-control"
                    id="eventDate"
                    placeholder="12/31/16" />
                </div>


                <button type="button" className="btn btn-default" onClick={this.createEvent}>Create Event</button>
              </form>

          </div>
        </div>

      </div>
    )
  }
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
export default SchoolEvents;
