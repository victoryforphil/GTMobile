import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from 'react-native';

import BellSchedule from './BellSchedule.js';
import BellScheduleList from "./BellScheduleList";
class BellSchedulePage extends Component {
  constructor(props){
    super(props);

  }
  
  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.titleText}>Bell Schedule</Text>
        <BellSchedule/>
        <BellScheduleList nav={this.props.nav}/>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
    view: {
      backgroundColor: '#23272A',

    },
    titleText:{
      fontSize: 24,
      color: 'white'
    }
})

export default BellSchedulePage;
