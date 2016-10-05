import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';
import * as firebase from 'firebase';

import Icon from 'react-native-vector-icons/MaterialIcons';
const winWidth = Dimensions.get('window').width
class Events extends Component {

  constructor(){
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
    };
  }
  componentDidMount(){
    var self = this;
    const db = firebase.database().ref("Events");

    db.on('value', snap => {
      var tempList =[];

      snap.forEach(data => {
        tempList.push(data.val())
      })

      this.setState({dataSource: self.ds.cloneWithRows(tempList)});
    });
  }

  renderItem(rowData){
    return(
      <View style={styles.listItem}>
        <Text style={styles.title}>{rowData.name}</Text>
        <Text style={styles.desc}>{rowData.desc}</Text>
        <Text style={styles.date}>{rowData.date}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
          <ListView
            style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderItem(rowData)}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    view: {
      flex: 1,

    },

    listItem: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 10,
        backgroundColor: '#2C2F33',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#23272A'
    },
    title: {
        fontSize: 30,
        flex: 1,
        color: 'white'
    },
    desc: {
        fontSize: 20,
        color: 'grey',
        flex: 1,
    },
    date: {
        fontSize: 20,
        color: 'blue',
        flex: 1,
    }
});
export default Events;
