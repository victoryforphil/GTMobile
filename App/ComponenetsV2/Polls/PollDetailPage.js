import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class PollDetailPage extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      options: this.ds.cloneWithRows(props.data.options),
    };
  }
  _voteItem(item){
    Alert.alert("Selected: " + item.name)
  }
  renderItem(data){
    return (<VoteItem data={data} onSelect={this._voteItem}/>)
  }
  render() {
    return (
      <ScrollView style={styles.view} keyboardShouldPersistTaps={true}>
        <Text style={styles.titleText}>{this.props.data.name}</Text>
        <Text style={styles.descText}>{this.props.data.desc}</Text>
        <Text style={styles.descText}>Tap to select. Please Choose One.</Text>
        <Text style={styles.titleText}>{this.props.data.desc}</Text>
        <ListView
          style={styles.list}
          dataSource={this.state.options}
          renderRow={(rowData) => this.renderItem(rowData)}
        />
      </ScrollView>

    );
  }
}

class VoteItem extends Component {

  constructor(props){
    super(props);
  }
  render(){
    var data = this.props.data;
    return(
      <View style={styles.voteItem}>

        <Text style={styles.titleText}>{data.name}</Text>
        <TouchableOpacity onPress = {this.props.onSelect(data)}>
          <Icon name="check-circle" size={50} color="#00FF00" />
        </TouchableOpacity>

      </View>
    )
  }
}
const styles = StyleSheet.create({
    view: {
      backgroundColor: '#23272A',
      flex: 1
    },
    titleText:{
      fontSize: 24,
      color: 'white',
      marginRight: 50,
      marginLeft: 25,
    },
    list:{

    },
    voteItem:{
      flex: 1,
      flexDirection: 'row',
      margin: 5,
      padding: 10,
      justifyContent: 'center',
       alignItems: 'center',
      backgroundColor: '#2C2F33'
    },
    voteIcon:{
      width: 35,
      height: 35
    }
})
export default PollDetailPage;
