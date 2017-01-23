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

import Icon from 'react-native-vector-icons/MaterialIcons';
const winWidth = Dimensions.get('window').width;

import {bindActionCreators} from 'redux';
import {connect} from "react-redux"

import * as bellActions from "../../actions/bellActions"
function mapStateToProps(state) {
  return{bells: state.bells}
}
function mapDispatchToProps(dispatch){
  return{ actions: bindActionCreators(bellActions,dispatch) }
}


class BellScheduleListellsList extends Component {

  constructor(props){
    super(props);
    var self = this;

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
       refreshing: false,
    };

    this.props.actions.fetchBells();
  }
  componentDidMount(){

  }

  _onRefresh() {
    this.props.actions.fetchBells();
  }
  onPress (data) {

    this.props.nav.navigateTo("BellScheduleDetailPage", data);
  }

  convertDate(date, time){
    var dateObj = new Date(date);

    return("" + (dateObj.getMonth() + 1)+ "/" + dateObj.getDate() + "/" + dateObj.getFullYear())
  }
  renderItem(rowData){
    var self = this;
    return(
      <TouchableOpacity style={styles.listItem} onPress={()=>{self.onPress(rowData)}}>
          <Text style={styles.label}>Bell Schedule for </Text>

          <Text style={styles.date}>{this.convertDate(rowData.date)}</Text>

          <Text style={styles.special}> ({rowData.special || "Normal"}) </Text>

      </TouchableOpacity>
    )
  }
  checkLoading(){
    var final;

    if(!this.props.bells.bellList.data){

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
        dataSource={this.ds.cloneWithRows(this.props.bells.bellList.data)}
        renderRow={(rowData) => this.renderItem(rowData)}
      />)
    }

    return final;
  }
  render() {
    console.log(this.props.bells.bellList.data);
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
      height: 500,
      backgroundColor: '#23272A'
    },

    listItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        backgroundColor: '#2C2F33',
        marginBottom: -10,
        borderWidth: 1,
        borderColor: '#23272A',
        marginTop: 10,
    },
    label: {
        fontSize: 18,
        margin: 5,
        color: 'white'
    },
    special: {
        fontSize: 18,
        margin: 5,
        color: 'yellow',
    },
    date: {
      margin: 5,
        flexDirection: 'column',
        fontSize: 18,
        color: '#00CED1',

    },
    EventImage: {
      marginTop:0,
      width:150,
      height: 150
    }

});
export default connect(mapStateToProps,mapDispatchToProps)(BellScheduleListellsList);
