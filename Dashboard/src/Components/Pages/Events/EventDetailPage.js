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

import {FlatButton, Card, CardHeader, CircularProgress ,CardText,CardActions, TextField, Subheader, List, ListItem, Snackbar} from 'material-ui';

import EventSettings from "./EventSettings"

import * as eventActions from "../../../actions/eventActions"
function mapStateToProps(state) {
  return{event: state.events.currentEvent}
}
function mapDispatchToProps(dispatch){
  return{ actions: bindActionCreators(eventActions,dispatch) }
}

class EventDetailPage extends Component {

    constructor(props){
      super(props);
    }

    componentWillMount(){
      this.props.actions.fetchEvent(this.props.params.id);
    }

    _submitChanges(data){
      this.props.actions.updateEvent(this.props.event.data._id, data);
    }

    isLoading(render){
      if(this.props.event.fetched == false){
        return ("Loading")
      }else{
        return render;
      }
    }

    render() {
      console.log(this.props.event);
      return(
        <div className="container">

          <EventSettings title={"Update"} event={this.props.event} buttonText={"Update"}onSubmit={this._submitChanges.bind(this)}/>


        </div>
      )
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (EventDetailPage);
