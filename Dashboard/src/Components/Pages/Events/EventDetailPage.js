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
      this.state = {
        event:{
          name: "[EVENT]"
        },
        name: "",
        desc: ""
      }
    }

    componentWillMount(){
      this.props.actions.fetchEvent(this.props.params.id);
    }
    componentWillReceiveProps(nextProps) {
      console.log("NEW PROPS:" , nextProps);
      if(!nextProps.event.data){
        return;
      }
      this.setState({
        event:  nextProps.event.data,
        name: nextProps.event.data.name,
        desc: nextProps.event.data.desc
      });
    }

    _onNameChange(event, text){
      this.setState({
        name:text
      });
    }

    _onDescChange(event, text){
      this.setState({
        desc:text
      });
    }

    _submitChanges(){
      this.props.actions.updateEvent(this.props.event.data._id, this.state);
    }

    isLoading(render){
      if(this.props.event.fetched == false){
        return ("Loading")
      }else{
        return render;
      }
    }

    render() {

      return(
        <div className="container">

          <Card>
            <CardHeader>
              {this.state.event.name} Settings
            </CardHeader>
            <CardText>
              <TextField
                floatingLabelText="Event Name"
                onChange={this._onNameChange.bind(this)}
                value={this.state.name}
                />
              <TextField
                defaultValue=""
                floatingLabelText="Event Description"
                value={this.state.desc}
                onChange={this._onDescChange.bind(this)}
              />
            </CardText>
            <CardActions>
                <FlatButton label="Update" onTouchTap={this._submitChanges.bind(this)}/>
            </CardActions>
          </Card>


        </div>
      )
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (EventDetailPage);
