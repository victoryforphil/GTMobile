import React, { Component } from 'react';
import closeControlPanel from './index.ios.js'
import {
  AppRegistry,
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

class DrawerContent extends Component {

  render() {
    return(
      <ScrollView >
      <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
      <Text style={ styles.DrwrTex}>Home</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
        <Text style={ styles.DrwrTex}>Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}>Athletics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}>Settings</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    button: {
    borderWidth: .5,
    borderColor: 'black',
    padding: 50,
  },
  DrwrTex: {
    color: '#00CED1'
  }
})
export default DrawerContent
