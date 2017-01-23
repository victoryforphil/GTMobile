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

import BellSettings from "./BellSettings"

import * as bellActions from "../../../actions/bellActions"
function mapStateToProps(state) {
  return{bell: state.bells.currentBell}
}
function mapDispatchToProps(dispatch){
  return{ actions: bindActionCreators(bellActions,dispatch) }
}

class BellDetailPage extends Component {

    constructor(props){
      super(props);
    }

    componentWillMount(){
      this.props.actions.fetchBell(this.props.params.id);
    }

    _submitChanges(data){
      this.props.actions.updateBell(this.props.bell.data._id, data);
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

          <BellSettings title={"Update"} event={this.props.bell} buttonText={"Update"}onSubmit={this._submitChanges.bind(this)}/>


        </div>
      )
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (BellDetailPage);
