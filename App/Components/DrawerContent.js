import React, { Component } from 'react';
import {
  AppRegistry,
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Navigator

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBar from './NavBar'


class DrawerContent extends Component {

  render() {
    return(
      <ScrollView >
      <TouchableOpacity style={styles.button} onPress={()=>{this.props.onSelect("Home")}}>
        <Text style={ styles.DrwrTex}><Icon name="home" size={30 } sytle={styles.icons}  />   Home</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.onSelect("Classes")}}>
        <Text style={ styles.DrwrTex}><Icon name="school" size={30 } sytle={styles.icons}  />   Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}><Icon name="event" size={30 } sytle={styles.icons}  />   Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}><Icon name="directions-run" sytle={styles.icons} size={30 }  />   Athletics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.closeDrawer}>
          <Text style={ styles.DrwrTex}><Icon name="settings" size={30 } sytle={styles.icons}  />   Settings</Text>
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
  icons: {
    color: '#00CED1',
    padding: 30,
marginTop: 15
  },
  DrwrTex: {
    color: '#00CED1'
  }
})
export default DrawerContent
