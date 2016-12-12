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




class Voting extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
No current polls as of right now but comeback when there is a school dance approaching!
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

});
export default Voting;
