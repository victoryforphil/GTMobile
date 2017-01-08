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

import {FlatButton, Card, CardHeader, CardText,CardActions, TextField, Subheader, List, ListItem, Snackbar} from 'material-ui';

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
          <CreateEvent createEvent = {this._createEvent.bind(this)}/>
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
    const listItems = this.props.data.map((item) =>
      <div>{this.renderItem(item)}</div>
    );

    return(
      <Card>
        <CardText>
        <List >
          <Subheader>All Events </Subheader>
          {listItems}
        </List>
        </CardText>
      </Card>

    )

  }
}

class CreateEvent extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      desc: ""
    }
  }

  componentDidMount() {
  }


  _onNameChange(event, newText){
    this.setState({name: newText});
  }

  _onDescChange(event, newText){
    this.setState({desc: newText});
  }

  _onCreateButton(){
    this.props.createEvent(this.state);
  }

  render(){
    return(
     <Card>
      <CardHeader
        title="Create New School Event"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <TextField

          floatingLabelText="Event Name"
          onChange={this._onNameChange.bind(this)}
        />

        <TextField
          defaultValue=""
          floatingLabelText="Event Description"
          onChange={this._onDescChange.bind(this)}
        />
       </CardText>
      <CardActions>
        <FlatButton label="Create" onTouchTap={this._onCreateButton.bind(this)}/>
      </CardActions>

     </Card>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EventPage);
