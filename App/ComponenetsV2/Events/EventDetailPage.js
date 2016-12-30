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

        <View style={styles.panel}>
            <Text style={styles.titleText}>{this.props.data.name}</Text>
            <Text style={styles.dateText}>{this.props.data.date}</Text>
        </View>
        <View style={styles.panel}>
            <Text style={styles.titleText}>{this.props.data.desc}</Text>
        </View>


      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
    view: {
      backgroundColor: '#23272A',
      flex: 1
    },
    panel:{
      flex: 1,
      flexDirection: 'row',
      margin: 5,
      padding: 10,
      justifyContent: 'center',
      backgroundColor: '#2C2F33'
    },
    titleText:{
      marginRight: 50,
      fontSize: 24,
      color: 'white'
    },
    dateText:{
      marginLeft: 50,
      marginTop: 3,
      color: 'cyan'
    }
})
export default EventDetailPage;
