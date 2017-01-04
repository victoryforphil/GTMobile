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
import * as firebase from 'firebase';
class PollDetailPage extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});



    this.state = {
      voteData: props.data.options
    };
  }
  _voteItem = (item)  =>{
    var self = this;

    var Selected

    if(!this.props.data.multi){
      item.isSelected = true;
    }

    //_options[item.index] = item;

    this.setState({voteData: this.state.voteData});
    console.log("Vote Item Selected: " , item, this.state);
  }
  submitVote(){
    var options = this.state.voteData;
    for (var i = 0; i < options.length; i++) {
                console.log('Selected:' + options[i]);
      if(options[i].isSelected == true){

        if(!options[i].voters){
            options[i].voters = []
        }
        options[i].voters.push("voter-id");


      }
    }
    var updates = {};
    updates['/Polls/' + this.props.data.key + '/options'] = options;

    console.log(updates,options);
    return firebase.database().ref().update(updates);
  }
  renderItem(data){
    return (<VoteItem data={data} voteFunction={this._voteItem}/>)
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
          dataSource={this.ds.cloneWithRows(this.state.voteData)}
          renderRow={(rowData) => this.renderItem(rowData)}
        />

        <TouchableOpacity style={styles.voteItem} onPress = {this.submitVote.bind(this)}>
          <Text> Done!</Text>
        </TouchableOpacity>
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

    var SelectRender = function(data){
      if(data.isSelected){
        return(<Icon name="check-circle" size={50} color="#00FF00" />)
      }else{
        return(<Icon name="check-circle" size={50} color="#000000" />)
      }
    }

    return(
      <View style={styles.voteItem}>

        <Text style={styles.titleText}>{data.name}</Text>
        <TouchableOpacity onPress = {this.props.voteFunction.bind(this, data)}>
          {SelectRender(data)}
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
