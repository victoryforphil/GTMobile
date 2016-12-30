import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';


class PollDetailPage extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(props.data.options),
    };
  }

  renderItem(data){
    return (<VoteItem data={data}/>)
  }
  render() {
    return (
      <ScrollView style={styles.view} keyboardShouldPersistTaps={true}>
        <Text style={styles.titleText}>{this.props.data.name}</Text>
        <Text style={styles.titleText}>{this.props.data.desc}</Text>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
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
        <TouchableOpacity>
          <Image style={styles.voteIcon} source={require("../../Images/GTM-Icon-Vote-Check.png")}/>
        </TouchableOpacity>

        <Text>{data.name}</Text>
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
      marginLeft: 50
    },
    list:{

    },
    voteItem:{
      flex: 1,
      flexDirection: 'row',
    },
    voteIcon:{
      width: 35,
      height: 35
    }
})
export default PollDetailPage;
