import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import NavBar from './NavBar'
import Icon from 'react-native-vector-icons/MaterialIcons';

class BellSchedule extends Component {
  changeScreen = () => {
this.props.navigator.push({
name: "Home"
})
  }
  seeya = () => {
this.props.navigator.pop({
name: "Home"
})
  }

  render() {

    return (
      <ScrollView>
      <Text style={styles.welcome}>
       Bell schedule screen
      </Text>
      <View style={styles.container}>
      <Image
        style={styles.EventImage}
        source={require('../bellschedule.png')} />



      </View>
</ScrollView>


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
    marginTop: 50,
    marginBottom: 50

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  EventImage: {
    marginTop:30,
    width:380,
    height: 500,


  }
});
export default BellSchedule;
