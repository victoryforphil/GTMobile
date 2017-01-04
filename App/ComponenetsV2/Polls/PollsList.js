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
  Alert
} from 'react-native';
import * as firebase from 'firebase';

import Icon from 'react-native-vector-icons/MaterialIcons';
const winWidth = Dimensions.get('window').width
class PollsList extends Component {

  constructor(props){
    super(props);
    var self = this;

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      polls: [],
    };
    this.loadData();
  }
  componentDidMount(){

  }

  loadData(){
    var self = this;
    const db = firebase.database().ref("Polls/");

    db.on('value', snap => {
      var tempList =[];

      snap.forEach(data => {
        var dataObj = data.val();
        dataObj.key = data.key;
        tempList.push(dataObj)
      });


      this.setState({polls: tempList});
      console.log("Loaded Poll Data: ", this.state);
    });
  }
  onPress (data) {
    this.props.nav.navigateTo("PollDetailPage", data);
  }
  renderItem(rowData){
    var self = this;
    return(
      <TouchableOpacity style={styles.listItem} onPress={()=>{self.onPress(this.GetPollByID(rowData.key))}}>
        <Text style={styles.title}>{rowData.name}</Text>
        <Text style={styles.date}>Poll Opens: {rowData.startDate}</Text>
        <Text style={styles.date}>Poll Closes: {rowData.endDate}</Text>
        <Text numberOfLines={2} style={styles.desc}>{rowData.desc}</Text>
      </TouchableOpacity>
    )
  }
  checkLoading(){
    var final;

    if(this.state.polls.length == 0){

      final = (<ActivityIndicator size="large"/>)
    }else{

      final = (<ListView
        style={styles.list}
        dataSource={this.ds.cloneWithRows(this.state.polls)}
        renderRow={(rowData) => this.renderItem(rowData)}
      />)
    }

    return final;
  }
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps={true}>
      <View style={styles.view}>
          {this.checkLoading()}
      </View>
      </ScrollView>
    );
  }

  GetPollByID(key){
    for (var i = 0; i < this.state.polls.length; i++) {
      if(this.state.polls[i].key == key){
        return this.state.polls[i];
      }
    }
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
        flex: 1,
        color: 'white',
        marginBottom: 50,
    },
    desc: {
        fontSize: 15,
        color: 'grey',
        flex: 1,
        marginTop: -20,
        marginBottom: 20,
        padding: 10
    },
    date: {
        flexDirection: 'column',
        fontSize: 15,
        color: '#00CED1',
        marginTop: -50,
        flex: 1,
        marginRight: 200,
        padding: 10
    },
    EventImage: {
      marginTop:0,
      width:150,
      height: 150
    }

});
export default PollsList;
