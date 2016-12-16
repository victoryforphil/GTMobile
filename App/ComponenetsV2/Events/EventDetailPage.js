import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';


class EventDetailPage extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <ScrollView style={styles.view}  keyboardShouldPersistTaps={true}>
        <Text style={styles.titleText}>{this.props.data.name}</Text>
        <Text style={styles.titleText}>{this.props.data.desc}</Text>
        <Text style={styles.titleText}>{this.props.data.date}</Text>
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
export default EventDetailPage;
