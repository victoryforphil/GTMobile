import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router'

import React, {
    Component
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux"

import {FlatButton, DatePicker, Card, CardHeader, CardText,CardActions, TextField, Subheader, List, ListItem, Snackbar, TimePicker} from 'material-ui';


class EventSettings extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      desc: "",
      startDate:  new Date(),
      endDate:  new Date(),
      startTime:  new Date(),
      endTime: new Date()
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.event || !nextProps.event.data){
      return;
    }
    this.setState({
      name: nextProps.event.data.name,
      desc: nextProps.event.data.desc,
      startDate: nextProps.event.data.startDate,
      endDate: nextProps.event.data.endDate,
      startTime: nextProps.event.data.startTime,
      endTime:  nextProps.event.data.endTime
    });
  }

  _onNameChange(event, newText){
    this.setState({name: newText});
  }

  _onDescChange(event, newText){
    this.setState({desc: newText});
  }

  _onStartDateChange(event, val){
    this.setState({startDate: val});
  }

  _onEndDateChange(event, val){
    this.setState({endDate: val})
  }

  _onStartTimeChanged(event, val){
    console.log(val);
    this.setState({startTime: val});
  }

  _onEndTimeChanged(event, val){
    this.setState({endTime: val})
  }
  _onCreateButton(){
    this.props.onSubmit(this.state);
  }

  render(){
    return(
     <Card>
      <CardHeader
        title={this.props.title}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText>
        <TextField
          value = {this.state.name}
          floatingLabelText="Event Name"
          onChange={this._onNameChange.bind(this)}
        />

        <TextField
          value = {this.state.desc}
          floatingLabelText="Event Description"
          onChange={this._onDescChange.bind(this)}
        />

        <DatePicker
          value={new Date(this.state.startDate)}
          hintText="Start Date"
          container="inline"
          mode="landscape"
          onChange={this._onStartDateChange.bind(this)}
         />
        <TimePicker
          value={new Date(this.state.startTime)}
          hintText="12hr Format"
          onChange={this._onStartTimeChanged.bind(this)}
        />
        <DatePicker
        value={new Date(this.state.endDate)}
          hintText="Ends Date"
          container="inline"
          mode="landscape"
          onChange={this._onEndDateChange.bind(this)} />
        <TimePicker
        value={new Date(this.state.endTime)}
          hintText="12hr Format"
          onChange={this._onEndTimeChanged.bind(this)} />
       </CardText>
      <CardActions>
        <FlatButton label={this.props.buttonText} onTouchTap={this._onCreateButton.bind(this)}/>
      </CardActions>

     </Card>
    )
  }

}


export default EventSettings;
