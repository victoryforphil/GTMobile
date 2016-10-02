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

class HomeFeed extends Component {

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.instructions} >
      <Image
        style={styles.Feedimage}
        source={require('./GTHS.jpg')} />
        <Text style={styles.welcome}>
Football game tonight!        </Text>


        </TouchableOpacity>

      </View>



    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  marginTop: 10,
  },
  welcome: {

    marginTop: 10,
    marginLeft: 20,

  },
  Feedimage: {
  marginLeft: -170,
    marginTop:0,
    width:90,
    height: 75,

  },
  instructions: {

    borderColor: 'black',
    padding: 10,
    width: 38,
    flexDirection: 'row'
  },
});
export default HomeFeed;
