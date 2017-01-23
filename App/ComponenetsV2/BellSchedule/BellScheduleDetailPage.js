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
class BellScheduleDetailPage extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <BellSchedule id={this.props.data._id}/>
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

export default BellScheduleDetailPage;
