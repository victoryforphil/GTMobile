import {
    Router,
    Route,
    Link,
    browserHistory
} from 'react-router'

import React, {
    Component
} from 'react';

import {connect, bindActionCreators} from "react-redux"
import {fetchEvents} from "../../../actions/eventActions"

function mapStateToProps(state) {
  return{events: state.events}
}
function mapDispatchToProps(dispatch){
  return{ fetchEvents: dispatch(fetchEvents()) }
}

class EventPage extends Component {

    componentWillMount(){
      this.props.fetchEvents;
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
    return (<a className="collection-item">{item.name}</a>)
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

export default connect(mapStateToProps,mapDispatchToProps)(EventPage);
