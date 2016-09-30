

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Image
        style={styles.homeImage}
        source={require('./GTHS.jpg')} />
    
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  homeImage: {
    marginTop:0,
    width:380,
    height: 190
  },
  welcome: {
    backgroundColor:'#F5FCFF',
  }
});
export default Home;
