import React, { Component } from 'react';
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
import Icon from 'react-native-vector-icons/MaterialIcons';
class DrawerContent extends Component {

  render() {
    return(
      <ScrollView >
      <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
        <Text style={ styles.DrwrTex}><Icon name="home" size={30 } color="#00CED1" />   Home</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
        <Text style={ styles.DrwrTex}><Icon name="school" size={30 } color="#00CED1" />   Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}><Icon name="event" size={30 } color="#00CED1" />   Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}><Icon name="directions-run" size={30 } color="#00CED1" />   Athletics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}><Icon name="settings" size={30 } color="#00CED1" />   Settings</Text>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    button: {
    borderWidth: .5,
    borderColor: 'black',
    padding: 30,
    flexDirection: 'row'

  },
  DrwrTex: {
    color: '#00CED1'
  }
})
export default DrawerContent
