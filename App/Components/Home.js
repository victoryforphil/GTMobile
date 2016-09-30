/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
        <Text style={styles.welcome}>
         HOME screen
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.changeScreen}>
          <Text style={ styles.DrwrTex}><Icon name="skip-next" size={30 } sytle={styles.icons}  />   Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.goback}>
          <Text style={ styles.DrwrTex}><Icon name="skip-previous" size={30 }  />   Back</Text>
        </TouchableOpacity>
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
});
export default Home;
