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
    render() {
      return(
        <div>
          <h1>Test</h1>
          <EventList data={this.props.events.events}/>
        </div>
      )
    }
}


class EventList extends Component{
  renderItem(item){
    return (<a className="collection-item">{item.name} <small><i>({item._id}</i>)</small></a>)
  }

  render(){
    const listItems = this.props.data.map((item) =>
      <div>{this.renderItem(item)}</div>
    );

    return(<div className="collection">
      {listItems}
    </div>)

  }
}

class CreateEvent extends Component{

}
export default connect(mapStateToProps,mapDispatchToProps)(EventPage);
