

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeFeed from './HomeFeed'
import Events from './Events'
class Home extends Component {

  changeScreen = () => {
this.props.navigator.push({
name: "Classes"
})
  }
  goback = () => {
this.props.navigator.pop({
name: "Classes"
})
  }

  render() {

    return (
  <View style={styles.container}>
  <ScrollView>


        <Image
          style={styles.homeImage}
          source={require('./GTHS.jpg')} />

    



</ScrollView>
    </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23272A',
  },

  homeImage: {
    marginTop:0,
    width:380,
    height: 230
  }
});
export default Home;
