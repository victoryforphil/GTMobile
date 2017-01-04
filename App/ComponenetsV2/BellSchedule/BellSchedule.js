import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  ListView,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';
class BellSchedule extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    var self = this;

    self.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    self.state = {
      dataSource: self.ds.cloneWithRows([]),
    };
    self.loadData();
  }
  loadData(){
    var self = this;
    const db = firebase.database().ref("BellSchedule/");

    db.on('value', snap => {
      var tempList =[];

      snap.forEach(data => {
          if(data.key == "currentPeriod"){
            this.state.currentPeroid = data.value();
          }else{
            tempList.push(data.val());
          }
      });


      this.setState({dataSource: self.ds.cloneWithRows(tempList)});
    });
  }
  renderItem(rowData){
    var self = this;
    return(
      <Peroid data={rowData}/>
    )
  }
  checkLoading(){
    var final;

    if(this.state){
      if(this.state.dataSource.getRowCount() == 0){

        final = (<ActivityIndicator size="large"/>)
      }else{

        final = (<ListView
          style={styles.list}
          dataSource={this.state.dataSource}
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
  render(){
    return(
      <View style={styles.peroid}>
        <Text style={styles.peroidLabel}> {this.props.data.name} </Text>
        <Text style={styles.peroidClasses}> {this.props.data.classes}</Text>
        <Text style={styles.peroidStart}>{this.props.data.startTime} </Text>
        <Text style={styles.peroidEnd}>{this.props.data.endTime} </Text>
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
    flex: 1,
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

export default BellSchedule;
