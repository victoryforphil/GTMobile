import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from 'react-native';

import EventsList from './EventsList';
class EventsPage extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.titleText}>Events</Text>
        <EventsList nav = {this.props.nav}/>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
    view: {
      backgroundColor: '#23272A',
      flex: 1
    },
    titleText:{
      fontSize: 24,
      color: 'white'
    }
})

export default EventsPage;
