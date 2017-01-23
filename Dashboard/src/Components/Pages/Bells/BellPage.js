import {
    Router,
    Route,
    Link,
    browserHistory,

} from 'react-router'

import React, {
    Component
} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from "react-redux"

import {FlatButton, DatePicker, Card, CardHeader, CardText,CardActions, TextField, Subheader, List, ListItem, Snackbar, TimePicker,
  Popover,
  Menu,

  IconButton,
  IconMenu,
  MenuItem,} from 'material-ui';
  import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
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
    _duplicate(data){
      console.log(data );
      this.props.actions.createBell(data);
      var self = this;
      setTimeout(function () {
        self.props.actions.fetchBells();
      }, 500);
    }

    _delete(id){

      this.props.actions.deleteBell(id);
      var self = this;
      setTimeout(function () {
        self.props.actions.fetchBells();
      }, 500);
    }
    _createBell(data){
      this.props.actions.createBell(data);
      var self = this;
      setTimeout(function () {
        self.props.actions.fetchBells();
      }, 500);
    }

    render() {

      return(
        <div className="container">
          <h1>Events</h1>
          <BellSettings title="Create Bell" buttonText="Create" onSubmit = {this._createBell.bind(this)}/>
          <BellList data={this.props.bells.bellList.data} duplicate={this._duplicate.bind(this)} delete={this._delete.bind(this)}/>

        </div>
      )
    }
}


class BellList extends Component{
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }


  renderItem(item){
    const iconButtonElement = (
      <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left">
      <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem href={"/bell/"+item._id}>Edit</MenuItem>
        <MenuItem onTouchTap={this.props.duplicate.bind(this,item)}>Duplicate</MenuItem>
        <MenuItem onTouchTap={this.props.delete.bind(this,item._id)}>Delete</MenuItem>
      </IconMenu>
    );

    return (

      <div>
        <ListItem

          rightIconButton={rightIconMenu}
          primaryText={"" + (new Date(item.date).getMonth() + 1)+ "/" + new Date(item.date).getDate() + "/" + new Date(item.date).getFullYear()}
          secondaryText={item._id}
        />

      </div>
      )
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
          <Popover

           open={this.state.open}
           anchorEl={this.state.anchorEl}
           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
           targetOrigin={{horizontal: 'left', vertical: 'top'}}
           onRequestClose={this.handleRequestClose}
         >
           <Menu>
             <MenuItem primaryText="Refresh" />
             <MenuItem primaryText="Help &amp; feedback" />
             <MenuItem primaryText="Settings" />
             <MenuItem primaryText="Sign out" />
           </Menu>
         </Popover>
        </List>
        </CardText>
      </Card>

    )

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BellPage);
