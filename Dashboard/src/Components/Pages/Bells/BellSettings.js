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


class BellSettings extends Component{
  constructor(props){
    super(props);
    this.state = {
      peroids: [],
      special: "",
      date:  new Date(),

    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.event || !nextProps.event.data){
      return;
    }
    this.setState({
      peroids: nextProps.event.data.peroids,
      special: nextProps.event.data.special,
      date: nextProps.event.data.date,
    });
  }

  _onSpeicalChange(event, newText){
    this.setState({name: newText});
  }

  _onDateChange(event, newText){
    this.setState({date: newText});
  }

  _onNewPeroid(){
    var currentPeroids = this.state.peroids;
    currentPeroids.push({
      value: currentPeroids.length + 1,
      name: "Peroid " + (currentPeroids.length + 1),
      startTime: new Date(),
      endTime: new Date(),
    });
    this.setState({peroids: currentPeroids});
  }


  _onCreateButton(){
    this.props.onSubmit(this.state);
  }
  _onPeroidUpdate(i,state){
    var currentPeroids = this.state.peroids;
    currentPeroids[i] = state;
    this.setState({peroids: currentPeroids});
  }
  renderPeroids(peroids){
    return(
      peroids.map((peroid,index) =>
        <BellPeroid peroid={peroid} index={index} onUpdate={this._onPeroidUpdate.bind(this)}/>
      )
    )
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
          value = {this.state.special}
          floatingLabelText="Speical Day (optional)"
          onChange={this._onSpeicalChange.bind(this)}
        />


        <DatePicker
          value={new Date(this.state.date)}
          hintText="Start Date"
          container="inline"
          mode="landscape"
          onChange={this._onDateChange.bind(this)}
         />
         {this.renderPeroids(this.state.peroids)}
         <FlatButton label="New Peroid" onTouchTap={this._onNewPeroid.bind(this)}/>
       </CardText>
      <CardActions>
        <FlatButton label={this.props.buttonText} onTouchTap={this._onCreateButton.bind(this)}/>
      </CardActions>

     </Card>
    )
  }

}



class BellPeroid extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: props.peroid.name,
      startTime: props.peroid.startTime,
      endTime: props.peroid.endTime
    }
  }

  _updateName(event, val){
    this.setState({name: val});
    this.props.onUpdate(this.props.index,this.state);
  }

  _updateStartTime(event, val){
    this.setState({startTime: val});
    this.props.onUpdate(this.props.index,this.state);
  }

  _updateEndTime(event, val){
    this.setState({endTime: val});
    this.props.onUpdate(this.props.index,this.state);
  }
  render(){
    return(<div>
    <TextField
      value = {this.state.name}
      floatingLabelText="Name"
      onChange={this._updateName.bind(this)}
    />

    <TimePicker
      value={new Date(this.state.startTime)}
      hintText="12hr Format"
      onChange={this._updateStartTime.bind(this)}
    />

    <TimePicker
      value={new Date(this.state.endTime)}
      hintText="12hr Format"
      onChange={this._updateEndTime.bind(this)}
    />
    </div>)
  }
}
export default BellSettings;
