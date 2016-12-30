import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView
} from 'react-native';

import PollsList from './PollsList';
class PollsPage extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.titleText}>Events</Text>
        <PollsList nav = {this.props.nav}/>
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

export default PollsPage;
