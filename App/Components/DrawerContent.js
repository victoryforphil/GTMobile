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
import NavBar from './NavBar'


class DrawerContent extends Component {

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
            icon: "home",
            route: "Events",
            dataPath: "Events"
          },
          {
            name: "Athletics",
            icon: "directions-run",
            children: [
              {
                name: "BasketBall",
                icon: "directions-run",
                children:[
                  {
                    name: "JV",
                    icon: "directions-run",
                    children:[
                      {
                        name: "Events",
                        icon: "directions-run",
                        route: "Events",
                        dataPath:"BasketBall/JV/Events"
                      }
                    ]
                  },
                  {
                    name: "Varsity",
                    icon: "directions-run",
                    children:[
                      {
                        name: "Events",
                        icon: "directions-run",
                        route: "Events",
                        dataPath:"BasketBall/Varsity/Events"
                      }
                    ]
                  }
                ]
              }
            ]

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

      console.log(this.state.listMap);
    }
    handlePress(selected) {
        if (selected.children) {
          var newList = this.state.listMap;
          newList.groups.push({routes: selected.children});
          this.updateList(newList);
        }
        console.log(selected);
        if(selected.route){
          this.props.onSelect(selected.route, selected.dataPath);
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
  render(){
    var self = this;


    var backButton = () =>{

      if(this.state.canBack){
        return(
          <TouchableOpacity style={styles.button} onPress={()=>{self.handleBack()}}>
            <Text style={styles.DrwrTex}><Icon name="home" size={30 } sytle={styles.icons} />Back</Text>
          </TouchableOpacity>
        )
      }
    }
    if(this.state.currentList){
      var sideBarItems = this.state.currentList.map(function(item) {
        return (
          <TouchableOpacity style={styles.button} onPress={()=>{self.handlePress(item)}}>
            <Text style={styles.DrwrTex}><Icon name={item.icon} size={30 } sytle={styles.icons} />{item.name}</Text>
          </TouchableOpacity>
        );
      });
    }
    return(
      <ScrollView >
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
export default DrawerContent
