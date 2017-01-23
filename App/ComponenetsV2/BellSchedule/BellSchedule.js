import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  ListView,
  ActivityIndicator,
  RefreshControl
} from 'react-native';


import {bindActionCreators} from 'redux';
import {connect} from "react-redux"

import * as bellActions from "../../actions/bellActions"
function mapStateToProps(state) {
  return{bells: state.bells}
}
function mapDispatchToProps(dispatch){
  return{ actions: bindActionCreators(bellActions,dispatch) }
}


class BellSchedule extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    var self = this;

    self.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    self.state = {
      dataSource: self.ds.cloneWithRows([]),
      refreshing: false
    };
    this.props.actions.fetchBell(this.props.id || "CURRENT")

  }


  _onRefresh() {
   this.props.actions.fetchBell(this.props.id || "CURRENT")
  }
  renderItem(rowData){
    var self = this;
    return(
      <Peroid data={rowData}/>
    )
  }

  checkLoading(){
    var final;
    console.log(this.props.bells.currentBell);
    if(this.state){
      if(this.props.bells.currentBell.data == null){

        final = (<ActivityIndicator key="BellSingleLoader" size="large"/>)
      }else{

        final = (<ListView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          style={styles.list}
          dataSource={this.ds.cloneWithRows(this.props.bells.currentBell.data.peroids)}
          renderRow={(rowData) => this.renderItem(rowData)}
        />)
      }
    }

    return final;
  }

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.currentPeroid}> Current Peroid: 1 </Text>
        {this.checkLoading()}
      </View>

    );
  }
}

class Peroid extends Component{
  convertTime(time){
    var timeObj = new Date(time);

    var mins = timeObj.getMinutes();
    if(mins < 10){
      mins = "0"+mins;
    }
    return(timeObj.getHours() + ":"+mins)
  }
  render(){
    return(
      <View style={styles.peroid}>
        <Text style={styles.peroidLabel}> {this.props.data.name} </Text>
        <Text style={styles.peroidStart}>{this.convertTime(this.props.data.startTime)} </Text>
        <Text style={styles.peroidEnd}>{this.convertTime(this.props.data.endTime)} </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#23272A',
    flex: 1
  },
  panel:{

    flexDirection: 'column',
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#2C2F33'
  },
  currentPeroid:{
    color: 'white',
    fontSize: 20
  },
  peroid:{
    borderWidth: 1,
    borderRadius: 3,
    margin: 3,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#23272A'
  },
  peroidLabel:{
    color: 'white',
    marginRight: 10,
    fontSize: 20
  },
  peroidClasses:{
    marginLeft: 15,
    marginRight: 15,
    color: 'yellow'
  },
  peroidStart: {
    marginRight: 10,
    marginLeft: 30,
    color: 'cyan',
    fontSize: 18
  },
  peroidEnd: {
    marginRight: 10,
    color: 'red',
    fontSize: 18
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(BellSchedule);
