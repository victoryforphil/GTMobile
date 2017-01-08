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

import EventSettings from "./EventSettings"

import * as eventActions from "../../../actions/eventActions"
function mapStateToProps(state) {
  return{events: state.events}
}
function mapDispatchToProps(dispatch){
  return{ actions: bindActionCreators(eventActions,dispatch) }
}

class EventPage extends Component {

    componentWillMount(){
      this.props.actions.fetchEvents();

    }

    _createEvent(data){
      this.props.actions.createEvent(data);
    }

    render() {
      console.log(this.props.events.eventsList);
      return(
        <div className="container">
          <h1>Events</h1>
          <EventSettings title="Create Event" buttonText="Create" onSubmit = {this._createEvent.bind(this)}/>
          <EventList data={this.props.events.eventsList.data}/>

        </div>
      )
    }
}


class EventList extends Component{
  renderItem(item){
    return (<ListItem href={"event/"+item._id} primaryText={item.name} secondaryText={item._id}/>)
  }

  render(){
    var self = this;
    const listItems = function(){
      if(self.props.data){
        return(self.props.data.map((item) =>
          <div>{self.renderItem(item)}</div>
        ))
      }else{
        return(<h1>Loading...</h1>)
      }
    }

    return(
      <Card>
        <CardText>
        <List >
          <Subheader>All Events </Subheader>
          {listItems()}
        </List>
        </CardText>
      </Card>

    )

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EventPage);
