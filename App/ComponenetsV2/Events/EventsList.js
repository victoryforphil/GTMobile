import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Dimensions,
  ScrollView,
  Image,
  ActivityIndicator  ,
  Alert,
  RefreshControl
} from 'react-native';
import * as firebase from 'firebase';

import Icon from 'react-native-vector-icons/MaterialIcons';
const winWidth = Dimensions.get('window').width;

import {bindActionCreators} from 'redux';
import {connect} from "react-redux"

import * as eventActions from "../../actions/eventActions"
function mapStateToProps(state) {
  return{events: state.events}
}
function mapDispatchToProps(dispatch){
  return{ actions: bindActionCreators(eventActions,dispatch) }
}


class EventsList extends Component {

  constructor(props){
    super(props);
    var self = this;

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
       refreshing: false,
    };

    this.props.actions.fetchEvents();
  }
  componentDidMount(){

  }

  _onRefresh() {
    this.props.actions.fetchEvents();
  }
  onPress (data) {

    this.props.nav.navigateTo("EventDetailPage", data);
  }

  convertDate(date, time){
    var dateObj = new Date(date);
    var timeObj = new Date(time);

    var mins = timeObj.getMinutes();
    if(mins < 10){
      mins = "0"+mins;
    }
    return("" + (dateObj.getMonth() + 1)+ "/" + dateObj.getDate() + "/" + dateObj.getFullYear() + " - "  + timeObj.getHours() + ":"+mins)
  }
  renderItem(rowData){
    var self = this;
    return(
      <TouchableOpacity style={styles.listItem} onPress={()=>{self.onPress(rowData)}}>
        <Text style={styles.title}>{rowData.name}</Text>
        <Text style={styles.date}>{this.convertDate(rowData.startDate,rowData.startTime)}</Text>
        <Text style={styles.date}>{this.convertDate(rowData.endDate,rowData.endTime)}</Text>
        <Text numberOfLines={2} style={styles.desc}>{rowData.desc}</Text>

      </TouchableOpacity>
    )
  }
  checkLoading(){
    var final;

    if(!this.props.events.eventsList.data){

      final = (<ActivityIndicator size="large"/>)
    }else{
      final = (<ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
        style={styles.list}
        dataSource={this.ds.cloneWithRows(this.props.events.eventsList.data)}
        renderRow={(rowData) => this.renderItem(rowData)}
      />)
    }

    return final;
  }
  render() {
    console.log(this.props.events.eventsList.data);
    return (
      <ScrollView keyboardShouldPersistTaps={true}>
      <View style={styles.view}>
          {this.checkLoading()}
      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#23272A'
    },

    listItem: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
        margin: 10,
        backgroundColor: '#2C2F33',
        marginBottom: -10,
        borderWidth: 1,
        borderColor: '#23272A',
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        color: 'white',
        marginBottom: 0,
    },
    desc: {
        fontSize: 15,
        color: 'grey',
        marginBottom: 5,
        padding: 10
    },
    date: {
        flexDirection: 'column',
        fontSize: 15,
        color: '#00CED1',


        marginRight: 200,
        padding: 5
    },
    EventImage: {
      marginTop:0,
      width:150,
      height: 150
    }

});
export default connect(mapStateToProps,mapDispatchToProps)(EventsList);
