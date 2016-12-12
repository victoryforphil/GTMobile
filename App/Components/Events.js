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
  Image
} from 'react-native';
import * as firebase from 'firebase';

import Icon from 'react-native-vector-icons/MaterialIcons';
const winWidth = Dimensions.get('window').width
class Events extends Component {

  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
    };
  }
  componentDidMount(){
    var self = this;
    const db = firebase.database().ref("Events/");

    db.on('value', snap => {
      var tempList =[];

      snap.forEach(data => {
        if(this.props.group){
          if(data.val().group == this.props.group){
            tempList.push(data.val())
          }
        }else{
          tempList.push(data.val())
        }
      })

      this.setState({dataSource: self.ds.cloneWithRows(tempList)});
    });
  }

  renderItem(rowData){
    return(
      <View style={styles.listItem}>
        <Text style={styles.title}>{rowData.name}</Text>
        <Text numberOfLines={3} style={styles.date}>{rowData.date}</Text>
        <Text numberOfLines={1} style={styles.desc}>{rowData.desc}</Text>

      </View>
    )
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.view}>
      <Image
        style={styles.EventImage}
        source={require('./GTHS.jpg')} />
          <ListView
            style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderItem(rowData)}
          />
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
        marginBottom: 0,
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
        marginLeft: 90,
        flex: 1,
        marginTop: -20,
        marginBottom: 0,
        padding: 10
    },
    date: {
        flexDirection: 'column',
        fontSize: 15,
        color: '#00CED1',
        marginTop: -50,
        flex: 1,
        marginRight: 200,
        padding: 10,
        marginBottom: 5
    },
    EventImage: {
      marginTop:0,
      width:380,
      height: 230
    }

});
export default Events;
