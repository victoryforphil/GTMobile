import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from 'react-native';

import BellSchedule from './BellSchedule';
class BellSchedulePage extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.titleText}>Bell Schedule</Text>
        <BellSchedule/>
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

export default BellSchedulePage;
