import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import NavBar from './NavBar'
import Icon from 'react-native-vector-icons/MaterialIcons';

class Freshmen extends Component {

  render() {

    return (
      <View style={styles.container}>
      <Image
        style={styles.EventImage}
        source={require('../freshmen.jpg')} />
        <Text style={styles.welcome}>
         Freshmen screen
        </Text>



      </View>



    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  EventImage: {
    marginTop:-350,
    width:380,
    height: 230
  }
});
export default Freshmen;
