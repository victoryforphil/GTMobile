import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import NavBar from './NavBar'
import Icon from 'react-native-vector-icons/MaterialIcons';

class Seniors extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Seniors screen
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
    color: 'black',
    marginBottom: 5,
  },
});
export default Seniors;
