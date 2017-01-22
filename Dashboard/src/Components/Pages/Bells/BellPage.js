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

import BellSettings from "./BellSettings"

import * as bellActions from "../../../actions/bellActions"
function mapStateToProps(state) {
  return{bells: state.bells}
}
function mapDispatchToProps(dispatch){
  return{ actions: bindActionCreators(bellActions,dispatch) }
}

class BellPage extends Component {

    componentWillMount(){
      this.props.actions.fetchBells();

    }

    _createBell(data){
      this.props.actions.createBell(data);
    }

    render() {

      return(
        <div className="container">
          <h1>Events</h1>
          <BellSettings title="Create Bell" buttonText="Create" onSubmit = {this._createBell.bind(this)}/>
          <BellList data={this.props.bells.bellList.data}/>

        </div>
      )
    }
}


class BellList extends Component{
  renderItem(item){
    return (<ListItem href={"bell/"+item._id} primaryText={item.date} secondaryText={item._id}/>)
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

export default connect(mapStateToProps,mapDispatchToProps)(BellPage);
