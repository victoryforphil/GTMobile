import React, { Component } from 'react';
import {
  AppRegistry,
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Navigator

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import icons from 'react-native-vector-icons/EvilIcons';
import * as firebase from 'firebase';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


class NavigationContent extends Component {

    constructor(props) {
        super(props);
        var initList = [
          {
            name: "Home",
            icon: "home",
            route: "Home"
          },
          {
            name: "Events",
            icon: "favorite",
            route: "Events"
          },
          {
            name: "Voting",
            icon: "favorite",
            route: "Polls"
          },
          {
            name: "Bell Schedule",
            icon: "alarm-on",
            route: "BellSchedule"
          },
          {
            name: "Settings",
            icon: "settings",
            route: "Settings"
          }
      ]

        var listGroup = {groups: [{routes: initList}]}
        this.state = {
            id: "main",
            currentList: initList,
            listMap: listGroup
        };

    }
    componentDidMount(){
      var self = this;
        GoogleSignin.configure().then(function(){
          GoogleSignin.currentUserAsync().then((user) => {
            console.log('USER', user);
            self.setState({user: user});
          }).done();
        });
    }
    signIn(){
      GoogleSignin.signIn()
        .then((user) => {
          this.setState({user: user});
        })
        .catch((err) => {
          console.log('WRONG SIGNIN', err);
        })
        .done();
    }
    signOut(){
      GoogleSignin.signOut()
        .then(() => {
          GoogleSignin.currentUserAsync().then((user) => {
            console.log('USER', user);
            this.setState({user: user});
        }).done();
      })
      .catch((err) => {

      });
    }
    handlePress(selected) {
        if (selected.children) {
          var newList = this.state.listMap;
          newList.groups.push({routes: selected.children});
          this.updateList(newList);
        }
        console.log(selected);
        if(selected.route){
          this.props.onSelect(selected.route, selected.group);
        }
    }
    handleBack(){
      var newList = this.state.listMap;
      newList.groups.pop();
      this.updateList(newList);
    }

    updateList(newList){
      if(newList.groups.length > 1){
        this.setState({canBack: true})
      }else{
        this.setState({canBack: false})
      }

      this.setState({
        listMap: newList,
        currentList: newList.groups[newList.groups.length - 1].routes
      });
    }
    signInRender(){
      var self = this;
      if(self.state.user != null){
        return (
          <TouchableOpacity style={styles.button} onPress={()=>{self.signOut()}}>
            <Text style={{color: 'white'}}>Sign Out {self.state.user.name}</Text>
          </TouchableOpacity>)
      }else{
        return(<GoogleSigninButton
          style={{width: 312, height: 64}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={self.signIn.bind(self)}/>)
      }
    }
  render(){
    var self = this;

    var backButton = () =>{
      if(this.state.canBack){
        return(
          <TouchableOpacity style={styles.button} onPress={()=>{self.handleBack()}}>
            <Text style={styles.DrwrTex}><Icon name="arrow-back" size={30 } sytle={styles.icons} />Back</Text>
          </TouchableOpacity>
        )
      }
    }
    if(this.state.currentList){
      var sideBarItems = this.state.currentList.map(function(item,i) {
        return (
          <TouchableOpacity key={i} style={styles.button} onPress={()=>{self.handlePress(item)}}>
            <Text style={styles.DrwrTex}><Icon name={item.icon} size={30 } sytle={styles.icons} />{item.name}</Text>
          </TouchableOpacity>
        );
      });
    }

    return(
      <ScrollView >
        {this.signInRender()}
        {backButton()}
        {sideBarItems}
      </ScrollView>)
  }
}
const styles = StyleSheet.create({
    button: {
        borderWidth: .5,
        borderColor: 'black',
        padding: 25,
        flexDirection: 'row'

    },
    backbutton: {
        borderWidth: .5,
        borderColor: 'black',
        padding: 15,
        flexDirection: 'row'

    },
    newbutton: {
        borderWidth: .5,
        borderColor: 'black',
        padding: 25,
        flexDirection: 'row'

    },
    icons: {
        color: '#00CED1',
        padding: 30,
        marginTop: 15
    },
    DrwrTex: {
        color: '#00CED1'
    }
})
export default NavigationContent
